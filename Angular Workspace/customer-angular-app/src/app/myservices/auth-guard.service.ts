import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService{
  constructor(private loginService:LoginService) { }
  canActivate(): boolean {
    // user has logged in or not 
    return this.loginService.loginFlag
  } 
}
