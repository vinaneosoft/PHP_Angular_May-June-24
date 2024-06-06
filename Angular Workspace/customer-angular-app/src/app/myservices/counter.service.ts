import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

   serviceCounter=0;
  constructor() { }

  incrementCounter():void{
    this.serviceCounter++;
  }
  getCounter():number{
    return this.serviceCounter;
  }
}
