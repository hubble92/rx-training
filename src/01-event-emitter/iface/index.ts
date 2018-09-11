export type Event = string;

export type IEventData = any;

export type IListener = (eventData: any) => void;

export interface IEventEmitter {
    events: {[key: string]: IListener[]};

    addEventListener(event: Event, listener: IListener): void;

    removeEventListener(event: Event, listener: IListener): void;

    emit(event: Event, eventData: IEventData): void;
}
