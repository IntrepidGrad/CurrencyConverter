import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCurrencies from '../reducers/currencies.reducer';
import { Currency } from '../../Models/currency';

export const selectCurrenciesState = createFeatureSelector<fromCurrencies.State>(
  fromCurrencies.currenciesFeatureKey
);

export interface CurrencyViewModel {
  currency: Currency;
  error: any;
}

export const selectCurrencyViewModel = createSelector(
  selectCurrenciesState,
  (state: fromCurrencies.State): CurrencyViewModel => {
    return {
      currency: state.currency,
      error: state.error,
    };
  }
);

export const selectCurrency = createSelector(
  selectCurrenciesState,
  (state: fromCurrencies.State) => state.currency
);

export const selectError = createSelector(
  selectCurrenciesState,
  (state: fromCurrencies.State) => state.error
);
