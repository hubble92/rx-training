import {Observable} from "rxjs";

const observable$ = new Observable((observer) => {

    observer.next(1);
    observer.next(2);
    observer.next(3);

    setTimeout(() => observer.next(4), 1000);
    setTimeout(() => observer.complete(), 2000);

});

observable$.subscribe((value) => console.log(`${value}`));
