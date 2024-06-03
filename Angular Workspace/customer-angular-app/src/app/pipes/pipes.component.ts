import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  productPrices=[12789.45, 36456.678,32100.5555,678.78787, 345, 4555.5,78000,678990.141421]
  sysDate=new Date();
  myDate=new Date('Jan 1, 2024');
}
