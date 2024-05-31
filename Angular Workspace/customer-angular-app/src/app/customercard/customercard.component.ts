import { Component, Input } from '@angular/core';
import { Customer } from '../myclasses/customer';

@Component({
  selector: 'app-customercard',
  templateUrl: './customercard.component.html',
  styleUrl: './customercard.component.css'
})
export class CustomercardComponent {
    @Input() // data incoming from parent
    mycustomer=new Customer(); // it will take a data from parent
}
