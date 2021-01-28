import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ad } from 'src/app/interfaces/Ad';
import { environment } from 'src/environments/environment';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { SavedDoneDialogComponent } from '../saved-done-dialog/saved-done-dialog.component';
import { UnsaveCatalogComponent } from '../unsave-catalog/unsave-catalog.component';

@Component({
  selector: 'app-ad-info',
  templateUrl: './ad-info.component.html',
  styleUrls: ['./ad-info.component.css']
})

//the code in this class is like home card.
export class AdInfoComponent implements OnInit {
  @Input()
  ad :Ad ;
  favClicked : boolean = false;
  @ViewChild('favIcon') favIcon:ElementRef;
  savedAds : number [];
  constructor(public dialog : MatDialog , private http : HttpClient ,private renderer: Renderer2) { }

  ngOnInit(): void {
    this.savedAds = JSON.parse(localStorage.getItem("savedAds"))
     
   }
  ngAfterViewInit(){
    if(this.savedAds.includes(this.ad.id)){
      this.favClicked = true;
      this.renderer.setStyle(this.favIcon.nativeElement, 'color', '#168ECB');
    }
  }

   getImgs():string[]{
    let imgs :string [] = new Array(); 
    this.ad.images.forEach(img => {
        imgs.push(img.slice(11,-1))
    })
    console.log(imgs)
    return imgs;
  }


  addToFav(){    
    if(!localStorage.getItem("email") ){
     this.openLoginDialog();
    }


//save
    else{
      
         if(!this.favClicked){
            this.favClicked = true;
      //      this.renderer.setStyle(this.favIcon.nativeElement , 'pointer-events' , 'none')
            this.http.post(environment.BASE_URL+"/saveAd" , {adId : this.ad.id} , 
            {
             headers : {'Authorization' : 'Bearer '+ localStorage.getItem("jwt")}
            }
            ).subscribe(s => {
              
             this.renderer.setStyle(this.favIcon.nativeElement, 'color', '#168ECB');
             this.openSavedDialog();
             this.savedAds.push(this.ad.id);
             localStorage.setItem('savedAds' , JSON.stringify(this.savedAds));
            
           
           
           },(
             err => {this.renderer.setStyle(this.favIcon.nativeElement, 'color', '#168ECB');}
           )
           
           );


         }
         //this is for unsave
         else{
           this.favClicked = false;
           this.http.delete(environment.BASE_URL+"/unSave/" + this.ad.id, 
           {
            headers : {'Authorization' : 'Bearer '+ localStorage.getItem("jwt")}
           }
           ).subscribe(
             r => {
               this.renderer.setStyle(this.favIcon.nativeElement, 'color', null);
               this.openUnsavedDialog() ;
              let indexOfUnSavedAd = this.savedAds.indexOf(this.ad.id);
               this.savedAds.splice(indexOfUnSavedAd , 1);
               localStorage.setItem('savedAds' , JSON.stringify(this.savedAds));
             } 
           
           
           , err => console.log(err))
         }
               
    }
 }

 openLoginDialog(){
   const dialogRef = this.dialog.open(LoginDialogComponent);
 }

 openUnsavedDialog(){
   this.dialog.open(UnsaveCatalogComponent).updatePosition({top: '0px', left:'40%'})
   .updateSize("300px" , "80px");
   setTimeout(()=> this.dialog.closeAll() , 500)
 }

 openSavedDialog(){
    this.dialog.open(SavedDoneDialogComponent).updatePosition({ top: '0px', left:'40%' })
    .updateSize("300px" , "80px")

    setTimeout(()=> this.dialog.closeAll() , 500)
 }


}
