import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EditGuardService implements CanActivate {

  constructor(private http : HttpClient ,private localStorage : LocalStorageService , private router : Router ) { }

  async canActivate(route: ActivatedRouteSnapshot){
    
    let adId = route.params['id'];
    const canActivate :boolean = await this.havePermission(adId, this.localStorage.get("userId"))
    if(canActivate == false) this.router.navigate(['notAllowed'])
    return canActivate;
  }


  async havePermission(adId, userId){
   const isOk : boolean = await this.http.get<boolean>(environment.BASE_URL+"/canEdit/" + adId +"/" + userId , 
    {headers : {'Authorization' : 'Bearer '+ this.localStorage.get("jwt")}})
    .toPromise();
    return isOk;
  
  }
  
}

