import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitize'
})

export class SanitizePipe implements PipeTransform {
  plainText: string;
  dummyElem: any;
  transform(value: string): any {
    if (!value) {
      return '';
    }
    else {
      this.dummyElem = document.createElement('DIV');
      this.dummyElem.innerHTML = value;
      return this.plainText = this.dummyElem.innerText.replace(/<[^>]*>/g, '');
    }
  }
}
