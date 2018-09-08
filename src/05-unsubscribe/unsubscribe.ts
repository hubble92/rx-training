import {Subscription, timer} from "rxjs";
import {createSubscription} from "../04-observable-creating/utils";

const interval$ = timer(0, 1000);

const subOne: Subscription = interval$.subscribe(createSubscription("Interval one"));

setTimeout(() => {
    subOne.add(interval$.subscribe(createSubscription("Interval two")));
}, 1000);

setTimeout(() => {
    subOne.unsubscribe();
}, 6000);
