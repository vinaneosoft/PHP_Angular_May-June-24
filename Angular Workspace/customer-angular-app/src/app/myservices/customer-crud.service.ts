import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../myclasses/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerCrudService {

  constructor(private http:HttpClient) { }

   getAllCustomers(){
    return this.http.get("http://localhost:3000/customers"); // Observable object
  }
  addCustomer(customer:Customer){
     return this.http.post("http://localhost:3000/customers",customer); // secure, data in  body
  }
}
