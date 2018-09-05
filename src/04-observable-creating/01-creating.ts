import {Observable, Observer} from "rxjs";

const observable$ = new Observable((observer: Observer<number>) => {

    observer.next(1);
    observer.next(2);
    observer.next(3);

    setTimeout(() => observer.next(4), 1000);
    setTimeout(() => observer.complete(), 2000);

});

observable$.subscribe((value: number) => console.log(`${value}`));
