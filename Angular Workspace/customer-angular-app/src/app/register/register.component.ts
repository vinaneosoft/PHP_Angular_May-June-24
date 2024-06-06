import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../myclasses/customer';
import { CustomValidators } from '../myclasses/custom-validators';
import { ActivatedRoute } from '@angular/router'; // built in service

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup;
  customer=new Customer();
  passwordPattern= new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$")
  constructor(private router:ActivatedRoute) // DI in Angular
  {
    this.registerForm=new FormGroup({
      id:new FormControl("", [Validators.required]),
      customerName:new FormControl("", [Validators.required, Validators.pattern("[A-Za-z ]{2,}")]),
      customerContact:new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
      customerEmail:new FormControl("", [Validators.required, Validators.email]),
      customerAge:new FormControl("",[Validators.required, Validators.min(10), Validators.max(90)]),
      username:new FormControl("",[Validators.required]),
      password:new FormControl("", [Validators.required, Validators.pattern(this.passwordPattern)]),
      cpassword:new FormControl("",[Validators.required]), // to confirm our password we need custom validator
      registerDate:new FormControl(""),
    }, CustomValidators.compare );

    const customerId=router.snapshot.paramMap.get("cid");
    console.log(customerId);
    //further logic of searhcing customer at backend using id we wil do in angular http
    
  }
 // we need custom function, custom class to put custom validation function
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
  get customerAge(){
    return this.registerForm.get("customerAge");
  } 


  register(){
    console.log(this.registerForm);
    this.customer=this.registerForm.value;
    if(this.customer.registerDate==null)
      this.customer.registerDate=new Date();
    console.log(this.customer);
    // angular http : we will save customer in json file at backend
  }



}
