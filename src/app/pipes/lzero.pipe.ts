import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lzero'
})
export class LzeroPipe implements PipeTransform {

  transform(value: String): String {
    return Number(value).toString();
  }

}
