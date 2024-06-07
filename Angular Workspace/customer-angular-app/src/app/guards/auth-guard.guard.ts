import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../myservices/login.service';


export const authGuardGuard: CanActivateFn = (route, state) => {
  console.log(route.routeConfig?.path);
  
  const loginService=inject(LoginService); // DI using inject function
  if(loginService.loginFlag==false)
      alert("Please Login First...........")
  return loginService.loginFlag
};
