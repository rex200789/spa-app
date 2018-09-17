import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitize'
})

export class SanitizePipe implements PipeTransform {

  transform(value: string): any {
    return value.replace(/(&amp\;)/g, '\'').replace(/(&quot\;)/g, '\'');
  }
}
