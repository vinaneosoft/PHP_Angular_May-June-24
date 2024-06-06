import { Component } from '@angular/core';
import { LoginService } from '../myservices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  flag=false;
  errorMessage="";
  constructor(private loginService:LoginService){}
  login(loginForm:any){
    console.log(loginForm.value.username);
    console.log(loginForm.value.password);
    this.flag=this.loginService.adminLogin(loginForm.value.username,loginForm.value.password)
    if(this.flag){
        alert("You are logged in successfully..."); // we will automatically navigate to home component
        this.errorMessage="";
    }
    else
      this.errorMessage="Incorrect username or password"
  }
}
