import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '@ngrx-items/core-data';

@Component({
  selector: 'ngrx-items-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  @Input() items: Item[];
  @Input() isLoading: boolean;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  selectItem(item: Item) {
    this.selected.emit(item);
  }

  deleteItem(item: Item) {
    this.deleted.emit(item);
  }
}
