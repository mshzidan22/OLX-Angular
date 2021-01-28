import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserAd } from 'src/app/interfaces/UserAd';
import { environment } from 'src/environments/environment';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';


@Component({
  selector: 'app-user-ads',
  templateUrl: './user-ads.component.html',
  styleUrls: ['./user-ads.component.scss']
})
export class UserAdsComponent implements OnInit {
  @Input()
  userAd : UserAd;
  isDeleted : boolean = false;
  constructor(public dialog: MatDialog , private router : Router) { }

  ngOnInit(): void {
  }

  openDialog() {
  this.dialog.open(DeleteDialogComponent,{data:this.userAd.id}).afterClosed()
  .subscribe(val=> {
    if(val == "deleted"){
                 this.isDeleted = true;  
  }} , err => console.log(err))

  }

  preview(){
      this.router.navigate(['ad',this.userAd.id]);
  }

  edit(){
    this.router.navigate(['myaccount','edit' ,this.userAd.id])
  }


  

}


