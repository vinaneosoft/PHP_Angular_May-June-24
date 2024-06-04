import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    //console.log(this.registerForm.value);
    this.customer=this.registerForm.value;
    if(this.customer.registerDate==null)
      this.customer.registerDate=new Date();
    console.log(this.customer);
    // angular http : we will save customer in json file at backend
  }
}
