import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeColletionModelAds, MiniAdDto as MiniAd } from 'src/app/interfaces/home-colletion-model-ads';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  HOME_API: string = environment.BASE_URL + "/home";
  homeAds: MiniAd[] = new Array();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<HomeColletionModelAds>(this.HOME_API)
      .subscribe(x => x._embedded.miniAdDtoes
      .forEach(ad => this.homeAds.push(ad)));

     
  }

  

}
