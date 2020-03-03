import { Action } from '@ngrx/store';
import { Item } from '@ngrx-items/core-data';

export enum ItemsActionTypes {
  ItemSelected = '[ITEM] Selected Item',
  LoadItems = '[ITEM] Load Item',
  ItemsLoaded = '[ITEM] Items Loaded',
  CreateItem = '[ITEM] Create Item',
  ItemCreated = '[ITEM] Items Created',
  UpdateItem = '[ITEM] Update Item',
  ItemUpdated = '[ITEM] Item Updated',
  DeleteItem = '[ITEM] Delete Item',
  ItemDeleted = '[ITEM] Item Deleted',
}

export class ItemSelected implements Action {
  readonly type = ItemsActionTypes.ItemSelected;
  constructor(public payload: number) {}
}

export class LoadItems implements Action {
  readonly type = ItemsActionTypes.LoadItems;
  constructor() {}
}

export class ItemsLoaded implements Action {
  readonly type = ItemsActionTypes.ItemsLoaded;
  constructor(public payload: Item[]) {}
}

export class CreateItem implements Action {
  readonly type = ItemsActionTypes.CreateItem;
  constructor(public payload: Item) {}
}

export class ItemCreated implements Action {
  readonly type = ItemsActionTypes.ItemCreated;
  constructor(public payload: Item) {}
}

export class UpdateItem implements Action {
  readonly type = ItemsActionTypes.UpdateItem;
  constructor(public payload: Item) {}
}

export class ItemUpdated implements Action {
  readonly type = ItemsActionTypes.ItemUpdated;
  constructor(public payload: Item) {}
}

export class DeleteItem implements Action {
  readonly type = ItemsActionTypes.DeleteItem;
  constructor(public payload: Item) {}
}

export class ItemDeleted implements Action {
  readonly type = ItemsActionTypes.ItemDeleted;
  constructor(public payload: Item) {}
}

export type ItemsActions =
| ItemSelected
| LoadItems
| ItemsLoaded
| CreateItem
| ItemCreated
| UpdateItem
| ItemUpdated
| DeleteItem
| ItemDeleted
;

