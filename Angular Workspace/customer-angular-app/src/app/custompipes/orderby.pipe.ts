import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(originalarray: any[], ...args: string[]): any {
   // console.log(originalarray);
    const property=args[0]; //id
  //  console.log(property);
    // string[], 
    //number[], object[]
    return originalarray.sort((ob1:any,ob2:any)=>{
        if(ob1[property]>ob2[property]) //ob1.id>ob2.id
          return 1;
        else if(ob1[property]<ob2[property])
          return -1
        else
          return 0;
    });
    
  }

}
