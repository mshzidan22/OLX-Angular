import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number , private http : HttpClient , private localStorage : LocalStorageService) { }

  ngOnInit(): void {
  }

  deleteAd(){
      this.http.delete(environment.BASE_URL+"/myaccount/ad/"+ this.id , {
        headers :{'Authorization' : 'Bearer '+ this.localStorage.get("jwt")}
      }).toPromise().then( (s) => console.log("ad has deleted succesfully") , err => console.log(err));
      
      this.dialogRef.close("deleted");
  }


}
