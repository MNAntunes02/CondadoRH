import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorSnackbar'
})
export class ColorSnackbarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'green': return 'green-snackbar';
      case 'red': return 'red-snackbar';
      default: return '' 
    }
  }

}
