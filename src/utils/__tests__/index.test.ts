import { isNumber } from '../';

describe('isNumber test', () => {
  it('Its a number', () => {
    [0, 1, -1, 10.345e17, '10'].map((n) => expect(isNumber(n)).toEqual(true));
  });

  it('Its not a number', () => {
    [false, true, 'hello'].map((n) => expect(isNumber(n)).toEqual(false));
  });
});
