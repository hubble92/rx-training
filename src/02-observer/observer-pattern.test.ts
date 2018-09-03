import {Observer, Subject} from "./iface";
import {Developer, ScrumMaster} from "./observer-pattern";


let subject: Subject<{ tasks: any[] }>;

beforeEach(() => {
    subject = new ScrumMaster();
});

test("Instance should be defined", () => {
    expect(subject).toBeDefined();
});
