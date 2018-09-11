import { Event, IListener, IEventEmitter, IEventData } from "./iface";

export class EventEmitter implements IEventEmitter {
    public events: {[key: string]: IListener[]} = {};

    addEventListener(event: Event, listener: IListener): void {
        if(this.events[event]) {
            this.events[event].push(listener);
        } else {
            this.events[event] = [];
            this.events[event].push(listener);
        }
    }

    removeEventListener(event: Event, listener: IListener): void {
        if (this.events[event]) {
            this.events[event] = this.events[event]
                .filter((l: IListener) => l !== listener);
        }
    }

    emit(event: Event, eventData: IEventData ): void {
        if (this.events[event]) {
            for(const listener of this.events[event]){
                listener(eventData);
            }
        }
    }
}

(function () {
    const eventEmiter =  new EventEmitter();

    const listener = (eventData: any) => console.log(`Hello from first ${eventData}`);
    const listener2 = (eventData: any) => console.log(`Hello from second ${eventData}`);

    eventEmiter.addEventListener('hello', listener);
    eventEmiter.addEventListener('hello', listener2);

    eventEmiter.emit('hello', 'listener');

    eventEmiter.removeEventListener('hello', listener);

    // only second listener will fire
    eventEmiter.emit('hello', 'listener');

})();



