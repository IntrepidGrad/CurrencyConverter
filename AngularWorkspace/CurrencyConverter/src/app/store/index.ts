import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCurrencies from './reducers/currencies.reducer';


export interface AppState {

  [fromCurrencies.currenciesFeatureKey]: fromCurrencies.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromCurrencies.currenciesFeatureKey]: fromCurrencies.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
