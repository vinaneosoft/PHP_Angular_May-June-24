import { Component } from '@angular/core';
import { CounterService } from '../myservices/counter.service';

@Component({
  selector: 'app-veg-foods',
  templateUrl: './veg-foods.component.html',
  styleUrl: './veg-foods.component.css'
})
export class VegFoodsComponent {
  counter2=this.counterService.serviceCounter;
  constructor(private counterService:CounterService){
    //console.log(counterService.getCounter()); // call to service method
  }
}
