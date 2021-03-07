import * as fromCurrencies from '../reducers/currencies.reducer';
import { selectCurrenciesState } from './currencies.selectors';

describe('Currencies Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCurrenciesState({
      [fromCurrencies.currenciesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
