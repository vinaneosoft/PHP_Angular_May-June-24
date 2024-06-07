import { Component } from '@angular/core';
import { LoginService } from '../myservices/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  flag=false;
  errorMessage="";
  /* DI in constructor */
  constructor(private loginService:LoginService, private router:Router, private cookie:CookieService){}
  login(loginForm:any){
    console.log(loginForm.value.username);
    console.log(loginForm.value.password);
    this.flag=this.loginService.adminLogin(loginForm.value.username,loginForm.value.password)
    if(this.flag){
        alert("You are logged in successfully..."); // we will automatically navigate to home component
        this.errorMessage="";
        this.cookie.set("username",loginForm.value.username, new Date("June 8, 2024"));
        this.router.navigate(["/home"]) // auto navigation to update a view
    }
    else
      this.errorMessage="Incorrect username or password"
  }
}
