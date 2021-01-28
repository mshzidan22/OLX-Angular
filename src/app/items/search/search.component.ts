import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Location } from 'src/app/interfaces/Location';
import { LocationServiceService } from 'src/app/services/locationService.service';
import {map, startWith} from 'rxjs/operators';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})



export class SearchComponent implements OnInit {
  

  locList : Location [];
  filterdLocations: Observable<string[]>;
  title;
  loc;
  searchForm = this.fb.group({
    title : [''],
    loc : ['']
  })
  
  


  constructor(private locationService: LocationServiceService , private fb: FormBuilder , private router: Router) { }


  ngOnInit() { 
    this.locList = this.locationService.getAllLocations();

    this.filterdLocations = this.searchForm.get("loc").valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
 
  }




  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.locList.map(loc=>loc.name).
    filter(locName => locName.toLowerCase().includes(filterValue));
  }

  
  onSubmit(){
    this.title =  this.searchForm.get('title').value;  
    let selectedLocation : string = this.searchForm.get('loc').value;
    this.router.navigate(['search'], {queryParams : {title : this.title , loc : selectedLocation}});
    // // let filteredLoc  = this.locList.find(loc => loc.name == selectedLocation) ;
    // // this.loc = (filteredLoc == undefined )? 'Egypt' : filteredLoc;          
  }
  
  canSubmited():boolean {
    if(this.router.url == '/' || this.router.url == '/home') return true 
    else return false; 
  //

  }
  
  // getCitesIn(govId:number){
  //   return this.locList.filter(gov => gov.parent == govId);
  // }

  // getGovs(){
  //   return this.locList.filter(gov=> gov.parent == 1);
  // }

  // getAll(){
  //   return this.locList;
  // }



}