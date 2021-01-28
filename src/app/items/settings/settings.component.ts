import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  hide : boolean = true;
  disable : boolean = true;
  updateUserForm = this.fb.group({
    username : [this.localStorage.get('username'),[Validators.required , Validators.minLength(5)]],
    email : [this.localStorage.get('email'),[Validators.required , Validators.minLength(6) , Validators.email]],
    phone : [this.localStorage.get('phone'),[Validators.required , Validators.minLength(10) ,Validators.maxLength(10)]],
    password : [this.localStorage.get('password'),[Validators.required , Validators.minLength(3)]]
  })
 
  constructor(private fb : FormBuilder , private http : HttpClient ,
     private localStorage:LocalStorageService , private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit(){
        this.http.put(environment.BASE_URL+"/myaccount/settings",{
          name: this.updateUserForm.get("username").value ,
          password: this.updateUserForm.get("password").value,
          email : this.updateUserForm.get("email").value,
          phone : this.updateUserForm.get("phone").value
        } ,{headers : {'Authorization' : 'Bearer '+this.localStorage.get("jwt")}})
        .subscribe(s=> {
          this.openDialog();
          this.localStorage.set("username" , this.updateUserForm.get('username').value );
          this.localStorage.set("password" , this.updateUserForm.get('password').value );
          this.localStorage.set("email" , this.updateUserForm.get('email').value );
          this.localStorage.set("phone" , this.updateUserForm.get('phone').value );

        
        } , err=> console.log("error"))
  }


  openDialog() {
    this.dialog.open(DialogElements);
  }

}

@Component({
  selector: 'dialog-elements',
  templateUrl: 'successDialog.html',
})
export class DialogElements {}
