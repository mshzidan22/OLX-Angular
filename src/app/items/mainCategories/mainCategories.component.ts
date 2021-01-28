import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-mainCategories',
  templateUrl: './mainCategories.component.html',
  styleUrls: ['./mainCategories.component.scss']
})
export class MainCategoriesComponent implements OnInit {

   catList : Category [];


  constructor(private catServ : CategoryService) { }

  ngOnInit() {
    this.catList = this.catServ.getAllCat();
  }

  getParents(){
    return this.catList.filter(c => c.parent == 0)
  }

  getChildren(id : number){
    return this.catList.filter(c => c.parent == id)
  }

}
