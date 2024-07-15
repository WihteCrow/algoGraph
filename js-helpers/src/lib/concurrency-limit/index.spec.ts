import { ConcurrencyLimit } from './index';

describe('ConcurrencyLimit', () => {
  it('ConcurrencyLimit', () => {
    const concurrencyLimit = new ConcurrencyLimit(2);
    const timeOut = (time: number) => {
      return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
    };

    function addTask(time: number, order: number) {
      concurrencyLimit.add(() =>
        timeOut(time).then(() => {
          console.log(order);
        })
      );
    }

    addTask(1000, 1);
    addTask(500, 2);
    addTask(300, 3);
    addTask(400, 4);
  });
});
