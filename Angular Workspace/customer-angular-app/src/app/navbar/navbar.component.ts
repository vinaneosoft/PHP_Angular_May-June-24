import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  //@Output  : wrong dont put @Output here
  brandName="Vina's Kitchen";  //1. declare the data at child component
  //2. create EventEmitter object. make it typesafe with type of data u want to share to child
  // put @Ouput on this variable
  @Output()
  emitter=new EventEmitter<string>();
  constructor(){
    //console.log("in constructor");
    // do not emit events in constructor
  }
  // built in lifecycle method its gets called automatically after
  // component gets created
  ngOnInit(){
   // console.log("in init life cycle method");
    //3. emit the event and pass the data from here
    this.emitter.emit(this.brandName);
  }
 
}
