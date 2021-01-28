import { Component, Input, OnInit } from '@angular/core';
import { Ad } from 'src/app/interfaces/Ad';

@Component({
  selector: 'app-ad-title',
  templateUrl: './ad-title.component.html',
  styleUrls: ['./ad-title.component.css']
})
export class AdTitleComponent implements OnInit {
  @Input()
  ad: Ad ;
  constructor() { }

  ngOnInit(): void {
     
  }

}
