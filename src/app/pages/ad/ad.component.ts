import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ad } from 'src/app/interfaces/Ad';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnInit {
  id:string;
  ad:Ad;
  

  constructor(private route : ActivatedRoute , private http :HttpClient) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => this.id = params.get('id'));
      this.http.get<Ad>(environment.BASE_URL + "/ads/" + this.id).subscribe(ad => this.ad = ad);
  }

}
