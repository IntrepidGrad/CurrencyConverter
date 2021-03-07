import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from '../Models/currency';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  constructor(private http: HttpClient) {}

  listOfCurrencies: any;
  currentCurrency: Currency;

  findCurrency(symbol: string): Observable<any> {
    return this.http.get('https://localhost:44394/api/currency').pipe(
      switchMap((currencies) => {
        this.listOfCurrencies = currencies;
        if (this.listOfCurrencies.find((x) => x.symbol === symbol)) {
          let currency = this.listOfCurrencies.filter(
            (x) => x.symbol === symbol
          );
          this.currentCurrency = currency;
        }
        if (
          typeof this.currentCurrency !== undefined &&
          this.currentCurrency !== null &&
          this.currentCurrency
        ) {
          localStorage.setItem(
            'Current Currency',
            JSON.stringify(this.currentCurrency)
          );
          return of(this.currentCurrency);
        } else {
          return throwError(
            'Currency with symbol' +
              symbol +
              ' does not exist/ is not in our database'
          );
        }
      })
    );
  }
}
