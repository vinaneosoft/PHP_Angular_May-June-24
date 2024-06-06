import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginFlag=false;
  constructor() { }

  adminLogin(username:string, password:string):boolean{
    if(username=="admin" && password=="Admin@123")
        this.loginFlag=true;
    else
        this.loginFlag=false;
    return this.loginFlag
}
}