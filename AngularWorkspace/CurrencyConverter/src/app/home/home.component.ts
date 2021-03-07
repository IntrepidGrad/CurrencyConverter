import { Component, OnInit } from '@angular/core';
import { AppState } from '../store';
import { select, State, Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import * as fromCurrencies from '../store/actions/currencies.actions';
import { Currency } from '../Models/currency';
import { Observable } from 'rxjs';
import * as fromSelectors from '../store/selectors/currencies.selectors';
import { selectCurrency } from '../store/selectors/currencies.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  public currency$: Observable<Currency>;
  public conversionRate: number;
  public convertedAmount: number;
  ngOnInit(): void {
    this.currency$ = this.store.pipe(select(fromSelectors.selectCurrency));
  }

  OnSubmit(form: NgForm) {
    console.log('currency: ' + form.value.symbol);
    this.store.dispatch(
      fromCurrencies.findCurrency({
        symbol: form.value.symbol,
      })
    );
    this.conversionRate = form.value.rate;
    console.log(form.value.rate);
    console.log(form.value.amount);
    this.convertedAmount =
      Math.round(form.value.amount * this.conversionRate * 100) / 100;
  }
}
