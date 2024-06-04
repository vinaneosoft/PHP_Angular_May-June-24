import { Component } from '@angular/core';
import { Customer } from '../myclasses/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  property="customerName";
  customers=[
    new Customer("323","Rahul kumaR", 7878787878,"rahul@gmail.com","poo","poo",new Date('Dec 22, 2004')),
    new Customer("123","Poonam pawar", 8989898989,"poonam@gmail.com","poo","poo",new Date('Dec 24, 2004')),
    new Customer("113","Kishan pawar", 9999999999,"kishan@gmail.com","poo","poo"),
    new Customer("124","Rohini paTil", 7777777777,"rohini@gmail.com","poo","poo",new Date('Nov 24, 2003')),
  ]
}
