import {interval, Observable} from "rxjs";
import {share} from "rxjs/operators";

import {createSubscription} from "./utils";

const interval$: Observable<number> = interval(1000)/*.pipe(share())*/;

interval$.subscribe(createSubscription("First"));

setTimeout(() => interval$.subscribe(createSubscription("Second")), 2000);

