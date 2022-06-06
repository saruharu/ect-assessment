import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSort'
})
export class SorterPipe implements PipeTransform {

  transform(items: any[], sortingCriteria: any): any[] {
    let sortedItems = items;
    console.log("items", sortingCriteria);
    if (!(sortingCriteria instanceof Array)) {
      this.sortItemTransform(sortedItems, sortingCriteria);
    }
    for (let sortingItem of sortingCriteria) {
      sortedItems = this.sortItemTransform(sortedItems, sortingItem);
    }
    return sortedItems;
  }

  sortItemTransform(items:any[], sortingItem: string): any[] {
    let isReverse = sortingItem.startsWith("-");
    if (isReverse) {
      sortingItem = sortingItem.substring(1);
      return items.sort((a, b) => a[sortingItem] - b[sortingItem]).reverse();
    }
    return items.sort((a, b) => a[sortingItem] - b[sortingItem]);
  }

}
