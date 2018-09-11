export interface IObserver {
    update(): void;
}

export interface IState {
    tasks: string[];
}

export interface IObserverPattern<T> {
    list: IObserver[];
    state: T;

    getState(): T;

    setState(state: T): void;

    attach(observer: IObserver): void;

    notifyAllObservers(): void;
}
