import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/Category';
import { SearchAds } from 'src/app/interfaces/SearchAds';
import { CategoryService } from 'src/app/services/category.service';
import { environment } from 'src/environments/environment';
import { SearchComponent } from '../search/search.component';




@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})


export class AdvancedSearchComponent implements OnInit {
  title:string  ;
  loc:string  ;
  sort:string;
  pageNumber : number;
  pageSize: number = 5;
  searchedAds : SearchAds;
  dataFound =false;
  pageEvent: PageEvent;
  


  
 

  catList : Category [];
  //inital values  comes from router
    advancedSearchForm = this.fb.group({
    condtion : [''],
    brand : [],
    minPrice : [],
    maxPrice : [],
    mainCategory : [],
    nestedCategory : []

  })

  @ViewChild('SearchComponent')
  titleAndLocForm : SearchComponent;


  constructor(private fb:FormBuilder , private catServ : CategoryService ,
    private http : HttpClient , private activatedRouter : ActivatedRoute) { }

  ngOnInit(): void {
    this.catList = this.catServ.getAllCat();
    let t = this.activatedRouter.queryParams.subscribe(param => {
      this.title = param['title'];
      this.loc = param['loc'];
      this.advancedSearchForm.get("mainCategory").setValue(param['mainCat']);
      this.advancedSearchForm.get("nestedCategory").setValue(param['nestedCat']);
      this.onSubmit();
  } )
     


  }


 ngAfterViewInit(){
   this.titleAndLocForm.searchForm.get("title").valueChanges.subscribe(value => this.title = value)
   this.titleAndLocForm.searchForm.get("loc").valueChanges.subscribe(value => this.loc = value)
 }

 
 getMainCat(){
  return this.catList.filter(c => c.parent == 0)
}

getNestedCat(mainCat){
if(mainCat == null) return null;
else{
  let mainCatId = this.catList.find(c => c.name == mainCat ).category_id;
  return this.catList.filter(c => c.parent == mainCatId);
} 

} 

getCategoryWillBeSend() : string {
  if(this.advancedSearchForm.get('nestedCategory').value != null ) 
  return this.advancedSearchForm.get('nestedCategory').value;
  else return this.advancedSearchForm.get('mainCategory').value;

  
}
doSort(sortVal){
  this.sort = sortVal.value;
}

createHttpParams(params: {}): HttpParams {
  let httpParams: HttpParams = new HttpParams();
  Object.keys(params).forEach(param => {
      if (params[param]) {
          httpParams = httpParams.set(param, params[param]);
      }
  });

  return httpParams;
}

getParams() : HttpParams{
  let cleanedParams: HttpParams = new HttpParams();
  let  params = {
    'title' : this.title,
    'location' : this.loc,
    'category' : this.getCategoryWillBeSend(),
    'condtion' :  this.advancedSearchForm.get('condtion').value,
    'minPrice' : this.advancedSearchForm.get('minPrice').value,
    'maxPrice' : this.advancedSearchForm.get('maxPrice').value,
    'page' : this.pageNumber,
    'size' : this.pageSize,
    'sort' : this.sort,
  }

  Object.keys(params).forEach(param => {
    if (params[param]) {
      cleanedParams = cleanedParams.set(param, params[param]);
    }
});
  return cleanedParams
}

 onSubmit(){



   this.http.get<SearchAds>(environment.BASE_URL+'/ads/search',{params : this.getParams()})
   .subscribe(res => {this.searchedAds = res; this.dataFound = true});
       // console.log(this.searchedAds);
   }

   handlePage(event){
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex;
    this.onSubmit();

   }
 

}
