type IPromiseCreator = () => Promise<any>;

/**
 * 并发限制
 */
export class ConcurrencyLimit {
  private readonly max: number;

  private queue: IPromiseCreator[] = [];

  private count: number = 0;

  constructor(max: number) {
    this.max = max;
  }

  async add(promiseCreator: IPromiseCreator) {
    if (this.count >= this.max) {
      this.queue.push(promiseCreator);
      return
    }

    this.count++;
    const resp = await promiseCreator();
    this.count--;

    if (this.queue.length) {
      const task = this.queue.shift();
      await task();
    }

    return resp;
  }
}
