import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCommasWithDots'
})
export class ReplaceCommasWithDotsPipe implements PipeTransform {
  transform(value: number): string {
    return value.toString().replace(/,/g, '.');
  }
}
