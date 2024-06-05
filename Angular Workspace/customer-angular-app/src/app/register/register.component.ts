import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../myclasses/customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup;
  customer=new Customer();
  constructor(){
    this.registerForm=new FormGroup({
      id:new FormControl("", [Validators.required]),
      customerName:new FormControl("", [Validators.required, Validators.pattern("[A-Za-z ]{2,}")]),
      customerContact:new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
      customerEmail:new FormControl("", [Validators.required]),
      username:new FormControl("",[Validators.required]),
      password:new FormControl("", [Validators.required]),
      cpassword:new FormControl("",[Validators.required]), // to confirm our password
      registerDate:new FormControl(""),
    
    });
  }

  get id(){
    return this.registerForm.get("id");
  }
  get customerName(){
    return this.registerForm.get("customerName");
  }
  get customerContact(){
    return this.registerForm.get("customerContact");
  }
  get customerEmail(){
    return this.registerForm.get("customerEmail");
  }
  get username(){
    return this.registerForm.get("username");
  }
  get password(){
    return this.registerForm.get("password");
  }
  get cpassword(){
    return this.registerForm.get("cpassword");
  }
  get registerDate(){
    return this.registerForm.get("registerDate");
  }
  // put getters for all form controls


  register(){
    console.log(this.registerForm);
    this.customer=this.registerForm.value;
    if(this.customer.registerDate==null)
      this.customer.registerDate=new Date();
    console.log(this.customer);
    // angular http : we will save customer in json file at backend
  }



}
