import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ad } from 'src/app/interfaces/Ad';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { FileDragComponent } from '../file-drag/file-drag.component';

@Component({
  selector: 'app-edit-ad',
  templateUrl: './edit-ad.component.html',
  styleUrls: ['./edit-ad.component.scss']
})
export class EditAdComponent implements OnInit {

   @Input()
   ad:Ad;
   @ViewChild('fileDrag')
   fileDrag : FileDragComponent;
   submitIsClicked :boolean = false;

  addForm = this.fb.group({
    title : ['',[Validators.required , Validators.minLength(6) , Validators.maxLength(80)]],
    description : ['' , [Validators.required , Validators.minLength(10)]],
    brand : [''],
    condition : ['' , [Validators.required]],
    price : ['' , [Validators.required]],
    name :[{value : this.localStroge.get("username") , disabled:true},[Validators.required]],
    phone : [{value : this.localStroge.get("phone") , disabled:true},[Validators.required]],
    email : [{value : this.localStroge.get("email") , disabled:true},[Validators.required]]
  })
  constructor(private http : HttpClient , private localStroge:LocalStorageService ,
     private fb :FormBuilder , private router : Router) { }

  ngOnInit(): void {

  }



  ngOnChanges(){
    if(this.ad){
              this.addForm.get("title").setValue(this.ad.title);
              this.addForm.get("description").setValue(this.ad.description);
              this.addForm.get("brand").setValue(this.ad.brand);
              this.addForm.get("condition").setValue(this.ad.condition);
              this.addForm.get("price").setValue(this.ad.price);
              console.log("the value has changed")
    }
  }
  

  onSubmit(){

 console.log("hi")
 this.submitIsClickedfn();
  let  ad  = {
    title : this.addForm.get("title").value ,
    description : this.addForm.get("description").value ,
    condition : this.addForm.get("condition").value ,
    brand : this.addForm.get("brand").value ,
    price : this.addForm.get("price").value ,
    images : this.getImagesToSend(this.ad.images)
  }
   this.http.put(environment.BASE_URL + "/myaccount/ad/" + this.ad.id , ad ,{
    headers : {'Authorization' : 'Bearer '+ this.localStroge.get("jwt")}
   }).subscribe( ad =>
     this.router.navigate(['ad' , this.ad.id])
   )

  }

  deleteImg(imgToRemove :string){
      let index = this.ad.images.findIndex(val => val == imgToRemove)
      this.ad.images.splice(index , 1)
  }

  getLatestImg(img){
    //note (bug)
    //when you save the img you need the right path
    // when you get the img you will get the Img(imgSrc=?????)
    this.ad.images.push("Img(imgSrc=" + img + ")")
  }

  getImagesToSend(imgs : string []) :string[] {
      let imgsToSend : string [] = new Array();
        imgs.forEach(img => imgsToSend.push(img.slice(11 , -1)));
        return imgsToSend;
    }

    submitIsClickedfn(){
      this.submitIsClicked = true;
    }

}
