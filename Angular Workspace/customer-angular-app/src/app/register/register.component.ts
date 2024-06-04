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
      customerName:new FormControl("", [Validators.required]),
      customerContact:new FormControl("", [Validators.required]),
      customerEmail:new FormControl("", [Validators.required]),
      username:new FormControl("",[Validators.required]),
      password:new FormControl("", [Validators.required]),
      registerDate:new FormControl("")
    });
  }

  get custId(){
    return this.registerForm.get("id");
  }
  get custName(){
    return this.registerForm.get("customerName");
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
