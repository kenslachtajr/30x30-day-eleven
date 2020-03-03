import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Item } from '@ngrx-items/core-data';

import { ItemsActions, ItemsActionTypes } from './items.actions';

export interface ItemsState extends EntityState<Item> {
  selectedItemId: number | null;
  loading: boolean;
}

export const adapter: EntityAdapter<Item> = createEntityAdapter<Item>();
export const initialState: ItemsState = adapter.getInitialState({
  selectedItemId: null,
  loading: false
});

export function itemsReducer(
  state = initialState,
  action: ItemsActions
): ItemsState {
  switch (action.type) {
    case ItemsActionTypes.ItemSelected: {
      return Object.assign({}, state, { selectedItemId: action.payload });
    }

    case ItemsActionTypes.LoadItems: {
      return {
        ...state,
        loading: true
      };
    }

    case ItemsActionTypes.ItemsLoaded: {
      return adapter.addAll(action.payload, { ...state, loading: false });
    }

    case ItemsActionTypes.CreateItem: {
      return {
        ...state,
        loading: true
      };
    }

    case ItemsActionTypes.ItemCreated: {
      return adapter.addOne(action.payload, {...state, loading: false});
    }

    case ItemsActionTypes.UpdateItem: {
      return {
        ...state,
        loading: true
      };
    }

    case ItemsActionTypes.ItemUpdated: {
      return adapter.upsertOne(action.payload, {...state, loading: false});
    }

    case ItemsActionTypes.DeleteItem: {
      return {
        ...state,
        loading: true
      };
    }

    case ItemsActionTypes.ItemDeleted: {
      return adapter.removeOne(action.payload.id, {...state, loading: false});
    }

    default:
      return state;
  }
}

export const getSelectedItemId = (state: ItemsState) => state.selectedItemId;

export const {
  selectIds: selectedItemIds,
  selectEntities: selectItemEntities,
  selectAll: selectAllItems,
  selectTotal: selectItemTotal
} = adapter.getSelectors();
