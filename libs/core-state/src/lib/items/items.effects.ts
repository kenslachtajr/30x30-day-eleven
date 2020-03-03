import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, onErrorResumeNext } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';

import { Item, ItemsService } from '@ngrx-items/core-data';
import {
  ItemsActionTypes,
  ItemsLoaded,
  CreateItem,
  UpdateItem,
  DeleteItem,
  LoadItems,
  ItemUpdated,
  ItemCreated,
  ItemDeleted
} from './items.actions';
import { ItemsState } from './items.reducer';

@Injectable({ providedIn: 'root' })
export class ItemsEffects {
  @Effect()
  loadItems$ = this.dataPersistence.fetch(ItemsActionTypes.LoadItems, {
    run: (action: LoadItems, state: ItemsState) => {
      return this.itemsService
        .get()
        .pipe(map((res: Item[]) => new ItemsLoaded(res)));
    },

    onError: (action: LoadItems, error) => {
      console.error('error', error);
    }
  });

  @Effect()
  createItem$ = this.dataPersistence.pessimisticUpdate(
    ItemsActionTypes.CreateItem,
    {
      run: (action: CreateItem, state: ItemsState) => {
        return this.itemsService
          .create(action.payload)
          .pipe(map((res: Item) => new ItemCreated(res)));
      },

      onError: (action: CreateItem, error) => {
        console.error('error', error);
      }
    }
  );

  @Effect()
  udpateItem$ = this.dataPersistence.pessimisticUpdate(
    ItemsActionTypes.UpdateItem,
    {
      run: (action: UpdateItem, state: ItemsState) => {
        return this.itemsService
          .update(action.payload)
          .pipe(map((res: Item) => new ItemUpdated(res)));
      },

      onError: (action: UpdateItem, error) => {
        console.error('error', error);
      }
    }
  );

  @Effect()
  deleteItem$ = this.dataPersistence.pessimisticUpdate(
    ItemsActionTypes.DeleteItem,
    {
      run: (action: DeleteItem, state: ItemsState) => {
        return this.itemsService
          .delete(action.payload.id)
          .pipe(map(_ => new ItemDeleted(action.payload)));
      },

      onError: (action: DeleteItem, error) => {
        console.error('error', error);
      }
    }
  );
  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ItemsState>,
    private itemsService: ItemsService
  ) {}
}
