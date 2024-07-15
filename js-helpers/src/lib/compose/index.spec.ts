import { compose } from './index';

describe('compose', () => {
  it('number', () => {
    expect(compose(Math.round, parseFloat)('3.56')).toEqual(4);
  });
});
