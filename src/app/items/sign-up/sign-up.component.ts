import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  hide = true;
  duplicateEmail : boolean = false;
  signUpForm = this.fb.group({
    username : ['',[Validators.required , Validators.minLength(5)]],
    email : ['',[Validators.required , Validators.minLength(6) , Validators.email]],
    phone : ['',[Validators.required , Validators.minLength(10) ,Validators.maxLength(10)]],
    password : ['',[Validators.required , Validators.minLength(3)]]
  })

  constructor(private fb : FormBuilder , private http : HttpClient , private route : Router , private localStorge : LocalStorageService) { }

  ngOnInit(): void {
  }

  onSubmit(){
        this.http.post(environment.BASE_URL+"/register" , {
          name : this.signUpForm.get('username').value , 
          password : this.signUpForm.get('password').value , 
          email : this.signUpForm.get('email').value , 
          phone : this.signUpForm.get('phone').value 
        }).subscribe(user => {this.route.navigate(['login']);
         this.localStorge.set("initalUser" , this.signUpForm.get("email").value) }, error => this.duplicateEmail = true)
  }

  

  UserNameErrorMessages(){
    if (this.signUpForm.get('username').hasError('minLength')) 
      return 'Name Should be more than 5 chars';
    
    else if (this.signUpForm.get('username').hasError('required')) 
      return 'You must enter your name';
    
  }

  EmailErrorMessages(){

      if (this.signUpForm.get('email').hasError('required')) 
      return 'You must enter your Email';
    
  }
  
  phoneErrorMessages(){
    if (this.signUpForm.get('phone').hasError('minLength')) 
      return 'Phone Should 10 numbers';
    
    else if (this.signUpForm.get('phone').hasError('required')) 
      return 'You must enter your phone';
    
  }

  passwordErrorMessages(){
    if (this.signUpForm.get('password').hasError('minLength')) 
      return 'Password Should be more than 2 chars';
    
    else if (this.signUpForm.get('password').hasError('required')) 
      return 'You must enter password';
    
  }
  


}
