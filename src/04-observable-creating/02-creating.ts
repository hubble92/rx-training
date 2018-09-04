import {Observable, Observer} from "rxjs";

const observable$ = new Observable((observer: Observer<number>) => {
    console.log(`New observer is created`);

    let count: number = 0;

    const interval = setInterval(() => {
        const nextValue = count++;

        if (nextValue > 10) {
            observer.complete();
        } else {
            observer.next(nextValue);
        }
    }, 1000);

    return () => clearInterval(interval);
});

const subscription = observable$.subscribe({
    next(value) {
        console.log(`${value}`);
    },
    error(error) {
        console.log(`Complete`, error);
    },
    complete() {
        console.log(`Complete`);
        subscription.unsubscribe();
    },
});

observable$.subscribe((v) => console.log(`Second subscription ${v}`));
