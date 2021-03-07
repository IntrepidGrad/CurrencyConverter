import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CurrenciesEffects } from './currencies.effects';

describe('CurrenciesEffects', () => {
  let actions$: Observable<any>;
  let effects: CurrenciesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CurrenciesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CurrenciesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
