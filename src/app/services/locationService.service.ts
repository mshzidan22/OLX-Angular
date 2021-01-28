import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '../interfaces/Location';


@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  private LOC_URL:string = (localStorage.getItem('currentLang') == 'en')?"assets/location.json" :"assets/location-ar.json"  ;
  private locList : Location [] = new Array();

 constructor(private http:HttpClient , private translateServ :TranslateService) { 


    this.fillLocations()

    this.translateServ.onLangChange.subscribe(s => {
      this.locList.splice(0,this.locList.length) ;
      if(s.lang == 'ar') this.LOC_URL ="assets/location-ar.json"
      else if (s.lang == 'en') this.LOC_URL ="assets/location.json";
      this.fillLocations();

  })
 }
 
 async fillLocations(){
  await this.http.get<Location[]>(this.LOC_URL).toPromise().then(data => data.map(a => this.locList.push(a)));

 }
 getAllLocations(){
   return this.locList;
 }

 getGovs(){
  return this.locList.filter(loc => loc.parent == 1);
}

getCites(govId : number){
  return this.locList.filter(loc => loc.parent == govId);
}
}