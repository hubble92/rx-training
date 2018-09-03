import {Observer, Subject} from "./iface";
import {Developer, ScrumMaster} from "./observer-pattern";


let subject: Subject<{ tasks: any[] }>;

beforeEach(() => {
    subject = new ScrumMaster();
});

test("Instance should be defined", () => {
    expect(subject).toBeDefined();
});

test("Observer instance should has method update", () => {
    const observer: Observer = new Developer(subject);

    expect(observer.update).toBeDefined();
});

test("On state change observers should be notifyed", () => {
    const developerOne = new Developer(subject);
    const developerTwo = new Developer(subject);
    const developerThree = new Developer(subject);

    const spyOne = jest.spyOn(developerOne, "update");
    const spyTwo = jest.spyOn(developerTwo, "update");
    const spyThree = jest.spyOn(developerThree, "update");

    subject.setState({tasks: ["test"]});

    expect(spyOne).toBeCalled();
    expect(spyTwo).toBeCalled();
    expect(spyThree).toBeCalled();
});
