import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup;
  
  constructor(){
    this.registerForm=new FormGroup({
      id:new FormControl(),
      customerName:new FormControl(),
      customerContact:new FormControl(),
      customerEmail:new FormControl(),
      username:new FormControl(),
      password:new FormControl(),
      registerDate:new FormControl()
    });
  }
  register(){
    console.log(this.registerForm);
  }
}
