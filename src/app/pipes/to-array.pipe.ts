import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArray'
})
export class ToArrayPipe implements PipeTransform {

  transform(value: any): any {
    if (!value){
      return;
    }
    console.log(value);
    console.log(Object.entries(value));
    
    return Object.entries(value);
  }

}
