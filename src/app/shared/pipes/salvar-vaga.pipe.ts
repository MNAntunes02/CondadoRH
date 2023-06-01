import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salvarVaga'
})
export class SalvarVagaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case true: return 'faHeart';
      case false: return 'faHeartCircleCheck';
      default: return '' 
    }
  }

}
