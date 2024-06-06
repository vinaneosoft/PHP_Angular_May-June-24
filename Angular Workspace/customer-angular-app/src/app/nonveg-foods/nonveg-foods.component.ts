import { Component } from '@angular/core';
import { CounterService } from '../myservices/counter.service';

@Component({
  selector: 'app-nonveg-foods',
  templateUrl: './nonveg-foods.component.html',
  styleUrl: './nonveg-foods.component.css'
})
export class NonvegFoodsComponent {
  counter1=this.counterService.serviceCounter;
  constructor(private counterService:CounterService){
    //console.log(counterService.getCounter()); // call to service method
  }
}
