import { cloneDeep } from './index';

describe('cloneDeep', () => {
  it('cloneDeep', () => {
    /**
     * NaN === NaN: false
     */
    const notTobe = [{ 1: 2, 3: NaN }, [{ 4: 4, e: global }]];
    const toBe = [null, undefined, Symbol(1), 1, 2, 3];

    for (let i = 0; i < notTobe.length; i++) {
      expect(cloneDeep(notTobe[i])).not.toBe(notTobe[i]);
    }

    for (let i = 0; i < toBe.length; i++) {
      expect(cloneDeep(toBe[i])).toBe(toBe[i]);
    }
  });
});
