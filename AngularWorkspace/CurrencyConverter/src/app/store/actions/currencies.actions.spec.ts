import * as fromCurrencies from './currencies.actions';

describe('loadCurrenciess', () => {
  it('should return an action', () => {
    expect(fromCurrencies.loadCurrenciess().type).toBe('[Currencies] Load Currenciess');
  });
});
