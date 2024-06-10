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
  getCustomerById(id:string){
    return this.http.get("http://localhost:3000/customers/"+id);
  }
  addCustomer(customer:Customer){
     return this.http.post("http://localhost:3000/customers",customer); // secure, data in  body
  }
  deleteCustomerById(id:string){
    return this.http.delete("http://localhost:3000/customers/"+id)
  }
  updateCustomer(customer:Customer){
    return this.http.put("http://localhost:3000/customers/"+customer.id,customer); // secure, data in  body
 }
}
