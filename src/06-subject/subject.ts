import {Subject} from "rxjs";
import {createSubscription} from "../04-observable-creating/utils";

const subject: Subject<number> = new Subject();

subject.next(0);

subject.subscribe(createSubscription("first"));

subject.next(1);
subject.next(2);
subject.next(3);
