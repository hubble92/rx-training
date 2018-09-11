import { EventEmitter } from "./event-emitter";
import { IListener } from "./iface";

let emitter: EventEmitter;
let listener: IListener;
let listener2: IListener;

fdescribe('#EventEmitter', () => {
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

    describe('#addEventListener', () => {
        emitter = new EventEmitter();

        listener = (eventData: any) => console.log(`hello ${eventData}`);
        listener2 = (eventData: any) => console.log(`hello ${eventData}`);

        emitter.addEventListener('click', listener);
        emitter.addEventListener('click', listener2);
        console.log('emitter.events', emitter.events);
        console.log('emitter.events["click"].length = ', emitter.events['click'].length);

        test("should add listeners to list", () => {
            expect(emitter.events['click'].length).toEqual(2);
        });
    });

    describe('#removeEventListener', () => {
        emitter = new EventEmitter();
        listener = (eventData: any) => console.log(`hello ${eventData}`);
        listener2 = (eventData: any) => console.log(`hello ${eventData}`);


        emitter.addEventListener('click', listener);
        emitter.addEventListener('click', listener2);
        emitter.removeEventListener('click', listener2);

        test("should remove listeners to list", () => {
            expect(emitter.events['click'].length).toEqual(1);
        });
    });
});
