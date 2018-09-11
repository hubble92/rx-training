import { Event, IEventData, IEventEmitter, IListener } from "./iface";

export class EventEmitter implements IEventEmitter {
    public events: {[key: string]: IListener[]} = {};

    public addEventListener(event: Event, listener: IListener): void {
        if (this.events[event]) {
            this.events[event].push(listener);
        } else {
            this.events[event] = [];
            this.events[event].push(listener);
        }
    }

    public removeEventListener(event: Event, listener: IListener): void {
        if (this.events[event]) {
            this.events[event] = this.events[event]
                .filter((l: IListener) => l !== listener);
        }
    }

    public emit(event: Event, eventData: IEventData ): void {
        if (this.events[event]) {
            for (const listener of this.events[event]) {
                listener(eventData);
            }
        }
    }
}
//
// (() => {
//     const eventEmitter =  new EventEmitter();
//
//     const listener = (eventData: any) => console.log(`Hello from first ${eventData}`);
//     const listener2 = (eventData: any) => console.log(`Hello from second ${eventData}`);
//
//     eventEmitter.addEventListener("hello", listener);
//     eventEmitter.addEventListener("hello", listener2);
//
//     eventEmitter.emit("hello", "listener");
//
//     eventEmitter.removeEventListener("hello", listener);
//
//     // only second listener will fire
//     eventEmitter.emit("hello", "listener");
//
// })();



