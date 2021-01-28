import { HttpClient } from '@angular/common/http';
import { createHostListener } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map , filter } from 'rxjs/operators';
import { Category } from '../interfaces/Category';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private CAT_URL:string = (localStorage.getItem('currentLang') == 'en')?"assets/category.json" :"assets/category-ar.json"  ;
private catList : Category [] = new Array();

constructor(private http:HttpClient,private translateServ : TranslateService) { 

  this.fillCategorys();
  this.translateServ.onLangChange.subscribe(s => {
      this.catList.splice(0,this.catList.length) ;
      if(s.lang == 'ar') this.CAT_URL ="assets/category-ar.json"
      else if (s.lang == 'en') this.CAT_URL ="assets/category.json";
      this.fillCategorys();

  })

}


async fillCategorys(){
  await this.http.get<Category[]>(this.CAT_URL).toPromise().then(data => data.map(a => this.catList.push(a)));

 }

getAllCat(){
  return this.catList;
}

getParentCats(){
  return this.catList.filter(cat => cat.parent == 0)
  }

getNestedCat(parent : number){
  return this.catList.filter(cat => cat.parent == parent)
}

}
