import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  companyName="Neosoft";
  inputType="password";
  checkNode=false;
  prove(){
    console.log(this.companyName); // if view chaging the data model gets updated
    
  }
  constructor(){
    setTimeout(()=>{
      this.companyName="Squad Infotech" // if model changes the data view gets updated
    },4000);
  }
  changeType(){
    //console.log(this.checkNode);
    this.checkNode?this.inputType="text":this.inputType="password";
  }
}
