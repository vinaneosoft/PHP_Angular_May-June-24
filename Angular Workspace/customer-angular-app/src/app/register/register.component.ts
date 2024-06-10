import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../myclasses/customer';
import { CustomValidators } from '../myclasses/custom-validators';
import { ActivatedRoute, Router } from '@angular/router'; // built in service
import { CustomerCrudService } from '../myservices/customer-crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  label="REGISTER";
  registerForm:FormGroup;
  customer=new Customer();
  passwordPattern= new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$")
  constructor(public router:ActivatedRoute, private crud : CustomerCrudService, public router2:Router) // DI in Angular
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
    console.log(router.routeConfig?.path);
    if(customerId!=null)
      this.searchCustomer(customerId);
    
  }
 // we need custom function, custom class to put custom validation function

  searchCustomer(id:string){
    this.crud.getCustomerById(id).subscribe({
      next:(data)=>{
        this.customer= data as Customer;
        const mycustomer={...this.customer, cpassword:this.customer.password}
       try {
        this.registerForm.setValue(mycustomer);
       } catch (error) {
          console.log("Image not set in control");
          
       }
       this.label="UPDATE";
      },
      error:(error)=>alert("something went wrong while searching")
    })
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
  get customerAge(){
    return this.registerForm.get("customerAge");
  } 


  register(){
   // console.log(this.registerForm);
    this.registerForm.removeControl("cpassword");
    this.customer=this.registerForm.value; 
    this.customer.customerImage="Resources/sampleimage.webp"
    if(this.customer.registerDate=="")
      this.customer.registerDate=new Date().toString();
    this.crud.addCustomer(this.customer).subscribe({
      next:(data)=>{
        console.log(data, " added");
        alert("Customer registered successfully....");
        this.router2.navigate(["/customers"]);
      },
      error:(error)=>alert("something went wrong while adding....")
    });
  }

  addCustomer(){
    // new customer object
  }

  updateCustomer(){
   
   
  }

}
