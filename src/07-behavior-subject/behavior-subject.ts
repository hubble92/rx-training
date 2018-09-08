import {BehaviorSubject, Observable} from "rxjs";

interface User {
    name: string;
    surname: string;
}

const subject: BehaviorSubject<User> = new BehaviorSubject<User>({name: "", surname: ""});

const userChanges$: Observable<User> = subject.asObservable();

userChanges$.subscribe((user) => console.log(`user = ${user.name}: ${user.surname}`));

subject.next({name: "Artem", surname: ""});
subject.next({name: "Artem", surname: "Pushkar"});
