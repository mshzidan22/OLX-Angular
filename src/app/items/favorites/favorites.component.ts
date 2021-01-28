import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ad } from 'src/app/interfaces/Ad';
import { MiniAdDto } from 'src/app/interfaces/home-colletion-model-ads';
import { UserAd } from 'src/app/interfaces/UserAd';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
    ads : MiniAdDto [] = new Array();
  constructor(private http :HttpClient) { }

  ngOnInit(): void {
    this.http.get<MiniAdDto[]>(environment.BASE_URL+"/myaccount/savedAds" , {
    headers : {'Authorization' : 'Bearer '+ localStorage.getItem("jwt")}}
    ).subscribe(ads => this.ads = ads , err => console.log(err))
  }

}
