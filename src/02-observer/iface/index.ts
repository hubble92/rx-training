export interface Observer {
    update();
}

export interface Subject<T> {
    list: Observer[];
    state: T;

    getState(): T;

    setState(state: T): void;

    notifyAllObservers(): void;

    attach(ob: Observer): void;
}
