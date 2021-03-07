import { createAction, props } from '@ngrx/store';
import { Currency } from '../../Models/currency';

export const findCurrency = createAction(
  '[Home Component] Find Currency',
  props<{ symbol: string }>()
);

export const findCurrencySuccess = createAction(
  '[Currency Effects] Find Currency Success',
  props<{ currentCurrency: Currency }>()
);

export const findCurrencyFailure = createAction(
  '[Currency Effects] Find Currency Failure',
  props<{ error: any }>()
);
