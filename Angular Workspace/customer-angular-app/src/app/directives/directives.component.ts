import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  show=true;
  age=0;
  companyLoc="Rabale";
  companyLocations=["Rabale","Dadar","Parel"];
  employeeNames=["Meera","Pooja","Pawan","Kirti","Kishan", "Amar","Sameera","Varun"];
  tableStyle={
    color:"green",
    backgroundColor:"yellow", // javascript keys in camel case
    fontSize:"20px"
  }
  styleClasses=['table','table-bordered','table-warning']
  classObject={
    'table':true,
    'table-bordered':true,
    'table-warning':false
  }
  constructor(){
    
  }
}
