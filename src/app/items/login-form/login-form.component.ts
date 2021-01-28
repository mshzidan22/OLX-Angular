import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { JwtResponse } from 'src/app/interfaces/JwtResponse';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  hide = true;
  loginNotSuccess : boolean = false;
  loginForm  = this.fb.group({
    username : ['',[Validators.required , Validators.email , Validators.minLength(8)]],
    password :['',[Validators.required]]
  })
  constructor(private fb : FormBuilder , private http : HttpClient ,
     private localStorage : LocalStorageService , private router : Router) { 
       
     }

  ngOnInit(): void {
    if(localStorage.getItem('initalUser')){
      this.loginForm.get('username').setValue(localStorage.getItem('initalUser'));
      localStorage.removeItem('initalUser');
    }
    

  }


  getErrorMessage() {
    if (this.loginForm.get('username').hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.get('username').hasError('username') ? 'Not a valid email' : '';
  }


  onSubmit(){

        this.http.post<JwtResponse>(environment.BASE_URL+"/login" , {username : this.loginForm.get('username').value ,
                                                        password : this.loginForm.get('password').value})
                  .subscribe(jwtResponse => {
                    this.localStorage.set("jwt", jwtResponse.jwt);
                    this.localStorage.set("userId" , jwtResponse.id.toString());
                    this.localStorage.set("username", jwtResponse.username);
                    this.localStorage.set("email", jwtResponse.email);
                    this.localStorage.set("phone", jwtResponse.phone);
                    this.localStorage.set("password" , this.loginForm.get('password').value)
                    this.loadSavedAds();
                    this.loginNotSuccess = false;
                   this.router.navigate(['home']);
                  },
                   error => {
                    this.loginNotSuccess= true;console.log(error)});
  }

  signUp(){
    this.router.navigate(['register']);
  }

  loadSavedAds(){
    this.http.get<number[]>(environment.BASE_URL + "/mySavedAds",
      
    {
      headers : {'Authorization' : 'Bearer '+ localStorage.getItem("jwt")}
     }).subscribe(ads =>
       {
          localStorage.setItem('savedAds' , JSON.stringify(ads))
       } , err => console.log(err))
  }

}
