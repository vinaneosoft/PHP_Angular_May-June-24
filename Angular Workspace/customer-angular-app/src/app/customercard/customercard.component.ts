import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Customer } from '../myclasses/customer';

@Component({
  selector: 'app-customercard',
  templateUrl: './customercard.component.html',
  styleUrl: './customercard.component.css'
})
export class CustomercardComponent implements OnChanges { 
    @Input() // data incoming from parent
    mycustomer=new Customer(); // it will take a data from parent
    ngOnInit(){
      console.log("in card init");
    }
    ngOnDestroy(): void {
      console.log("in card destroy");
    }
    ngOnChanges(changes: SimpleChanges): void {
   //  console.log(changes); // it detects the changes in value which in shared from parent
    }
}
