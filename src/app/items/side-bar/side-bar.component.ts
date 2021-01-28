import { Component, Input, OnInit } from '@angular/core';
import { Ad } from 'src/app/interfaces/Ad';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input('ad')
  ad: Ad ;
  showPhoneClicked : boolean  = false ;
  constructor() { }

  ngOnInit(): void {
  }

  showPhone(){
     this.showPhoneClicked = !this.showPhoneClicked;
  }
}
