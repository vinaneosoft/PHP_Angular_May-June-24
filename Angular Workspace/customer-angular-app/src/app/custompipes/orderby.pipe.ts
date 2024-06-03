import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(originalarray: any, ...args: string[]): any {

    // sort logic
    // sorting custom array

    return originalarray;
  }

}
