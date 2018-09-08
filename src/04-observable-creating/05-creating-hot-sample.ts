import {Observable} from "rxjs";
import {createSubscription} from "./utils";

type Listener = (value: number) => void;
type Unsubscribe = () => void;

class Producer {
    private list: Listener[] = [];
    private count: number = 0;
    private interval: any = null;

    public add(listener: Listener): Unsubscribe {
        this.list.push(listener);

        if (!this.interval) {
            this.interval = setInterval(() => {
                this.notifyAllListeners();
            }, 1000);
        }

        return () => {
            this.remove(listener);
        };
    }

    public remove(listener: Listener): void {
        this.list = this.list.filter((i) => i !== listener);
        if (this.list.length > 0) {
            clearInterval(this.interval);
        }
    }

    public removeAll(): void {
        this.list = [];
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    private notifyAllListeners(): void {
        for (const listener of this.list) {
            listener(this.count++);
        }
    }
}

const coldInterval$ = new Observable((observer) => {
    const producer: Producer = new Producer();

    producer.add(function(value){
        observer.next(value);
    });

    return () => {
        producer.removeAll();
    };
});


coldInterval$.subscribe(createSubscription("cold"));

setTimeout(() => {
    coldInterval$.subscribe(createSubscription("cold two"))
}, 3000);
