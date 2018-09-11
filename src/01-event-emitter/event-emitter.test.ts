import {EventEmitter} from "./event-emitter";
import {IListener} from "./iface";

let emitter: EventEmitter;
let listener: IListener;
let listener2: IListener;

beforeEach(() => {
    emitter = new EventEmitter();

    listener = (eventData: any) => console.log(`hello ${eventData}`);
    listener2 = (eventData: any) => console.log(`hello ${eventData}`);
});

test("should be defined with methods", () => {
    expect(emitter).toBeDefined();
    expect(emitter.emit).toBeDefined();
    expect(emitter.addEventListener).toBeDefined();
    expect(emitter.removeEventListener).toBeDefined();
});

test("should add listeners to list", () => {
    emitter = new EventEmitter();

    listener = (eventData: any) => console.log(`hello ${eventData}`);
    listener2 = (eventData: any) => console.log(`hello ${eventData}`);

    emitter.addEventListener("click", listener);
    emitter.addEventListener("click", listener2);

    expect(emitter.events.click.length).toEqual(2);
});

test("should remove listeners to list", () => {
    emitter = new EventEmitter();

    listener = (eventData: any) => console.log(`hello ${eventData}`);
    listener2 = (eventData: any) => console.log(`hello ${eventData}`);

    emitter.addEventListener("click", listener);
    emitter.addEventListener("click", listener2);

    emitter.removeEventListener("click", listener2);

    expect(emitter.events.click.length).toEqual(1);
});
