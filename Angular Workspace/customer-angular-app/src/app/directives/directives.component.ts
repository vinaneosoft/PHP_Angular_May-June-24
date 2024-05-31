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
  employeeNames=["Meera","Pooja","Pawan","Kirti","Kishan"];
  constructor(){
    
  }
}
