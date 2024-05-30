import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  companyName="Neosoft";
  prove(){
    console.log(this.companyName); // if view chaging the data model gets updated
    
  }
  constructor(){
    setTimeout(()=>{
      this.companyName="Squad Infotech" // if model changes the data view gets updated
    },4000);
  }
}
