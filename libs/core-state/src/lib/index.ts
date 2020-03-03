import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromItems from './items/items.reducer';

import { Item } from '@ngrx-items/core-data';

export interface AppState {
  items: fromItems.ItemsState;
}

export const reducers: ActionReducerMap<AppState> = {
  items: fromItems.itemsReducer
};

export const selectItemsState = createFeatureSelector<fromItems.ItemsState>(
  'items'
);

export const selectItemIds = createSelector(
  selectItemsState,
  fromItems.selectedItemIds
);

export const selectItemEntities = createSelector(
  selectItemsState,
  fromItems.selectItemEntities
);

export const selectAllItems = createSelector(
  selectItemsState,
  fromItems.selectAllItems
);

export const selectCurrentItemId = createSelector(
  selectItemsState,
  fromItems.getSelectedItemId
);

export const emptyItem: Item = {
  id: null,
  name: '',
  description: ''
};

export const selectCurrentItem = createSelector(
  selectItemEntities,
  selectCurrentItemId,
  (itemEntities, itemId) => {
    return itemId ? itemEntities[itemId] : emptyItem;
  }
);

export const selectItemLoadingState = createSelector(
  selectItemsState,
  state => state.loading
);
