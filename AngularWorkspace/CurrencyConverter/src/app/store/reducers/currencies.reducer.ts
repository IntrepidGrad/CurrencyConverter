import { Action, createReducer, on, Store } from '@ngrx/store';
import * as CurrenciesActions from '../actions/currencies.actions';
import { Currency } from '../../Models/currency';

export const currenciesFeatureKey = 'currencies';

export interface State {
  currency: Currency;
  error: string;
}

export const initialState: State = {
  currency: {
    id: null,
    symbol: '',
    name: '',
    conversionRate: null,
  },
  error: '',
};

export const reducer = createReducer(
  initialState,

  on(CurrenciesActions.findCurrencySuccess, (state, action) => {
    return {
      ...state,
      currency: action.currentCurrency,
      error: null,
    };
  }),
  on(CurrenciesActions.findCurrencyFailure, (state, action) => {
    return {
      ...state,
      currency: {
        id: null,
        symbol: '',
        name: '',
        conversionRate: null,
      },
      error: action.error,
    };
  })
);
