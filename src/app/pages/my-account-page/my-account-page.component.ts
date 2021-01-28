
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-account-page',
  templateUrl: './my-account-page.component.html',
  styleUrls: ['./my-account-page.component.css']
})
export class MyAccountPageComponent implements OnInit {

  links = [new Link("My ADS" , "/myaccount/myads") ,
           new Link("Settings" , "/myaccount/settings"),
           new Link("Favorites" , "/myaccount/fav")
           
];

@ViewChild('nav')
nav ;
  activeLink = this.links[0].name;
  
  constructor(private router : Router) { }

  ngOnInit(): void {
  if(this.router.url == '/myaccount') this.router.navigate(['myaccount/myads'])    
}
ngAfterViewChecked()	
{
  if(this.router.url == '/myaccount/settings'){
    this.nav.selectedIndex = 1
  }
  else if(this.router.url == '/myaccount/fav'){
    this.nav.selectedIndex = 2
  }
  else {
    this.nav.selectedIndex = 0
}



}

}


class Link {
  constructor(public name : string , public url : string){};
}

