import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ad } from 'src/app/interfaces/Ad';
import { Category } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LocationServiceService } from 'src/app/services/locationService.service';
import { environment } from 'src/environments/environment';
import { FileDragComponent } from '../file-drag/file-drag.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  catList : Category [] = new Array();
  locList : Location [] = new Array();
  uploadedImgs : string [] = new Array();
  uploadIsFinished : boolean;
  @ViewChild('fileDrag')
   fileDrag : FileDragComponent;

  addForm = this.fb.group({
    title : ['',[Validators.required , Validators.minLength(6) , Validators.maxLength(80)]],
    categoryId : ['' , [Validators.required]],
    locationId : ['' , [Validators.required]],
    description : ['' , [Validators.required , Validators.minLength(10)]],
    brand : [''],
    condition : ['' , [Validators.required]],
    price : ['' , [Validators.required]],
    name :[{value : this.localStroge.get("username") , disabled:true},[Validators.required]],
    phone : [{value : this.localStroge.get("phone") , disabled:true},[Validators.required]],
    email : [{value : this.localStroge.get("email") , disabled:true},[Validators.required]]
  })


  constructor(private fb : FormBuilder , private catServ : CategoryService ,private router : Router ,
     private locServ : LocationServiceService , private http : HttpClient , private localStroge : LocalStorageService , private cd : ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getCats();

  }
  ngAfterViewInit(){
    this.cd.detectChanges();
  }

  error(){
     return "error"
  }

  getCats(){
     this.catList = this.catServ.getAllCat();
  }

  getMainCats(){
    return this.catList.filter(cat => cat.parent == 0)
  }

  getNestedCats(parentId : number){
    return this.catList.filter(cat => cat.parent == parentId)
  }

  getGovs(){
    return this.locServ.getGovs();
  }
  getCites(govId : number){
     return this.locServ.getCites(govId)
  }

  getLatestImg(img){
    //note (bug)
    //when you save the img you need the right path
    // when you get the img you will get the Img(imgSrc=?????)
    this.uploadedImgs.push("Img(imgSrc=" + img + ")")
  }

  deleteImg(imgToRemove :string){
    let index = this.uploadedImgs.findIndex(val => val == imgToRemove)
    this.uploadedImgs.splice(index , 1)
}

getImagesToSend(imgs : string []) :string[] {
  let imgsToSend : string [] = new Array();
    imgs.forEach(img => imgsToSend.push(img.slice(11 , -1)));
    return imgsToSend;
}

  onSubmit(){
  let  ad  = {
    title : this.addForm.get("title").value ,
    description : this.addForm.get("description").value ,
    condition : this.addForm.get("condition").value ,
    categoryId : this.addForm.get("categoryId").value ,
    locationId : this.addForm.get("locationId").value ,
   
    brand : this.addForm.get("brand").value ,
    
    price : this.addForm.get("price").value ,
    name : this.addForm.get("name").value ,
    phone : this.addForm.get("phone").value ,
    email : this.addForm.get("email").value ,
   // images : this.fileDrag.uploadedImg
   images:this.getImagesToSend(this.uploadedImgs)
  }
    this.http.post<Ad>(environment.BASE_URL + '/adding',ad , {
    } ).subscribe(ad => {
      this.router.navigate(['ad',ad.id])
    });

  }
}





