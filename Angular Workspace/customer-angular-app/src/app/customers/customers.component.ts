import { Component } from '@angular/core';
import { Customer } from '../myclasses/customer';
import { CustomerCrudService } from '../myservices/customer-crud.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  property="id";
  customers:Customer[]=[]

  constructor(private crud:CustomerCrudService){
    this.getCustomers();
  }
   getCustomers(){
    this.crud.getAllCustomers().subscribe({
      next:(data)=> this.customers=data as Customer[],
      error:(error)=>console.log(error)
    })

  }

  
  delete(){
    
  }
}
