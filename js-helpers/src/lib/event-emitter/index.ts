type IListen = (data: any) => void;

/**
 * 事件
 */
export class EventEmitter {
  event: Map<string, IListen[]> = new Map();
  on(eventName: string, listen: IListen) {
    if (this.event.has(eventName)) {
      this.event.get(eventName).push(listen);
    } else {
      this.event.set(eventName, [listen]);
    }

    return () => this.off(eventName, listen);
  }

  off(eventName: string, listen?: IListen) {
    if (!listen) {
      this.event.delete(eventName);
      return;
    }

    const listens = this.event.get(eventName);
    for (let i = 0; i < listens.length; i++) {
      if (listens[i] === listen) {
        listens.splice(i, 1);
      }
    }

    if (listens.length === 0) {
      this.event.delete(eventName);
    }
  }

  emit(eventName: string, data: any) {
    const listens = this.event.get(eventName);
    for (let i = 0; i < listens.length; i++) {
      listens[i](data);
    }
  }
}
