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
      error:(error)=>alert("Something went wrong while getting.....")
    })

  }

  delete(id:string){
    const confirmed=confirm("Do you really want to delete?");
    if(confirmed){
      this.crud.deleteCustomerById(id).subscribe({
        next:(data)=> { alert("customer deleted successfully"); this.getCustomers()},
        error:(error)=>alert("Something went wrong while deleting.....")
      })
    }
  }
}
