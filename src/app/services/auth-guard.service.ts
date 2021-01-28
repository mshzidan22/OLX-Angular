import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private localStorage : LocalStorageService , private router : Router) { }
  canActivate() : boolean {
        if(localStorage.getItem('username')) return true;
        else {
          this.router.navigate(['login'])
          return false};
  }
}
