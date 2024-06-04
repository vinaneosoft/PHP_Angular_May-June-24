import { Component } from '@angular/core';
import { Customer } from '../myclasses/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  property="id";
  customers=[
    new Customer("124","Rohini paTil", 7777777777,"rohini@gmail.com","rohini","rohini",new Date('Nov 24, 2003')),
    new Customer("323","Rahul kumaR", 7878787878,"rahul@gmail.com","rahul","rahul",new Date('Dec 22, 2004')),
    new Customer("123","Poonam pawar", 8989898989,"poonam@gmail.com","poo","poo",new Date('Dec 24, 2004')),
    new Customer("113","Kishan pawar", 6767676767,"kishan@gmail.com","kishan","kishan"),
   
  ]
}
