import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as CurrenciesActions from '../actions/currencies.actions';
import { CurrenciesService } from '../../Servcies/currencies.service';
import { Currency } from '../../Models/currency';

@Injectable()
export class CurrenciesEffects {
  constructor(
    private actions$: Actions,
    private currencyService: CurrenciesService
  ) {}

  findCurrency$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CurrenciesActions.findCurrency),
      concatMap((action) =>
        this.currencyService.findCurrency(action.symbol).pipe(
          map((currency) =>
            CurrenciesActions.findCurrencySuccess({ currentCurrency: currency })
          ),
          catchError((error) =>
            of(CurrenciesActions.findCurrencyFailure({ error }))
          )
        )
      )
    );
  });
}
