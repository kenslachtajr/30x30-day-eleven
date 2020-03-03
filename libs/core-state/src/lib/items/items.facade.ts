import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { ItemsState } from './items.reducer';
import * as ItemsAction from './items.actions';
import { selectAllItems, selectItemLoadingState, selectCurrentItem } from '..';
import { Item } from '@ngrx-items/core-data';
import { ItemsActionTypes } from './items.actions';

@Injectable({
  providedIn: 'root'
})
export class ItemsFacade {
  allItems$ = this.store.pipe(select(selectAllItems));
  currentItem$ = this.store.pipe(select(selectCurrentItem));
  itemsLoading$ = this.store.pipe(select(selectItemLoadingState));

  mutations$ = this.actions$
  .pipe(
    filter(action =>
      action.type === ItemsActionTypes.CreateItem
      || action.type === ItemsActionTypes.UpdateItem
      || action.type === ItemsActionTypes.DeleteItem
    )
  );

  constructor(private store: Store<ItemsState>, private actions$: ActionsSubject) {}

  selectItem(id) {
    this.store.dispatch(new ItemsAction.ItemSelected(id));
  }

  loadItems() {
    this.store.dispatch(new ItemsAction.LoadItems());
  }

  addItem(item: Item) {
    this.store.dispatch(new ItemsAction.CreateItem(item));
  }

  updateItem(item: Item) {
    this.store.dispatch(new ItemsAction.UpdateItem(item));
  }

  deleteItem(item: Item) {
    this.store.dispatch(new ItemsAction.DeleteItem(item));
  }
}
