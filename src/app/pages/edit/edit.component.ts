import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ad } from 'src/app/interfaces/Ad';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
   id : number;
   ad : Ad ;
  constructor(private activatedRouter : ActivatedRoute , private http : HttpClient) { }

   ngOnInit() {
   this.activatedRouter.paramMap.subscribe(params =>{ 

     this.http.get<Ad>(environment.BASE_URL+"/ads/"+params.get('id'))
     .subscribe((ad)=> this.ad = ad , err => alert("error"))
   }
   );
    
   
    
   
  }
  
  

}
