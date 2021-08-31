import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixedlen'
})
export class FixedlenPipe implements PipeTransform {
  transform(value: any, fixedLen: number): any {
    let res = '';
    for (let i = 0; i < value.length && i < fixedLen; i++) {
      res += value[i];
    }
    return res;
  }
}
