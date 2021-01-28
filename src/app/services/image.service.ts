import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { fileURLToPath } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  IMG_URL : string = 'https://acondorw.sirv.com/olx/';


  constructor(private http: HttpClient) { }



 async uploadImg(img :File , token :string){
      let num = Math.floor((Math.random() * 10000000) + 1);
      let imgName : string = num.toString()+ img.name;
      let uploadedImg : string;
       await this.http.post(environment.IMG_API ,img ,
           {
           headers : {'Authorization' : 'Bearer '+ token , 'Content-Type':'image/*'},
           params :{filename : '/olx/'+ imgName},
          // reportProgress: true,
          //  observe: 'events'
          }   
      ).toPromise().then(s => uploadedImg =this.IMG_URL + imgName)
      .catch(err =>console.log("error when uploading an image"));
      
      return uploadedImg;
 }



}
