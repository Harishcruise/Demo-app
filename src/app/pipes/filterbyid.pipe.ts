import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbyid'
})
export class FilterbyidPipe implements PipeTransform {

  transform(items: any[], term: String) {
    console.log('term', term);
  
    return term 
        ? items.filter(item => item.Id.indexOf(term) !== -1)
        : items;
  }

}
