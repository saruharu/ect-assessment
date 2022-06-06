import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSort'
})
export class SorterPipe implements PipeTransform {

  transform(items: any[], sortingCriteria: any): any[] {
    let sortedItems = items;
    if (!(Array.isArray(sortingCriteria))) {
      this.sortItemTransform(sortedItems, sortingCriteria);
    }
    for (let sortingItem of sortingCriteria) {
      sortedItems = this.sortItemTransform(sortedItems, sortingItem);
    }

    return sortedItems;
  }

  sortItemTransform(items:any[], sortingItem: any): any[] {

    let isReverse = sortingItem.startsWith("-")
    if (isReverse) {
      sortingItem = sortingItem.substring(1);
      return items.sort((a, b) =>{
        if(b[sortingItem] < a[sortingItem]) return -1;
        return 1;
      })
    }

    return items.sort((a, b) => {
      if(a[sortingItem] < b[sortingItem]) return -1;
      return 1;
    }
      )
    } 
  

}
