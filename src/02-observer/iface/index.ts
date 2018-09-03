export interface Observer {
    update(): void;
}

export interface Subject<T> {
    list: Observer[];
    state: T;

    getState(): T;

    setState(state: T): void;

    notifyAllObservers(): void;

    attach(ob: Observer): void;
}
