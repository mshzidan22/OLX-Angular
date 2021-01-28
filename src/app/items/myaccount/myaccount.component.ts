import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserAd } from 'src/app/interfaces/UserAd';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {
  userAds : UserAd [];
  constructor(private http : HttpClient , private localStorage:LocalStorageService , private route : ActivatedRoute) { }

   ngOnInit() {

    this.http.get<UserAd[]>(environment.BASE_URL+"/myaccount", {
      headers : {'Authorization' : 'Bearer '+ this.localStorage.get("jwt")}
    }
    ).subscribe(ads =>{ this.userAds = ads} , err => alert("error"));
    
    
  }

  



}


