import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  username : String;
  langChanged : boolean;
  constructor(private localStorage : LocalStorageService , private router : Router ,private translate: TranslateService) {
    let currentLang = (localStorage.get("currentLang"))?localStorage.get("currentLang") : 'en';
    translate.setDefaultLang(currentLang);
    (currentLang == "ar")? this.langChanged=true : this.langChanged =false;
    
   }
   
   useLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem("currentLang",language);
    this.langChanged = !this.langChanged;
  }

  ngDoCheck(): void {
    if(localStorage.getItem("username"))
       this.username = localStorage.getItem("username")
  }

  logout(){
     localStorage.clear();
     this.username = null;
     this.router.navigate(['login']);
  }

}
