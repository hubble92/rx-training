import {Observer, Subject} from "./iface";

interface State {
    tasks: string[];
}

class ScrumMaster implements Subject<State> {
    public list: Observer[];
    public state: State;

    public attach(ob: Observer): void {
        this.list.push(ob);
    }

    public getState(): State {
        return this.state;
    }

    public notifyAllObservers(): void {
        for (const observer of this.list) {
            observer.update();
        }
    }

    public setState(state: State): void {
        this.state = state;
        this.notifyAllObservers();
    }
}

class Developer implements Observer {
    private subject: Subject;

    constructor(subject: Subject) {
        this.subject = subject;
        this.subject.attach(this);
    }

    public update() {
        console.log(`Task added:`, this.subject.getState());
    }
}


(function main() {
    const master: Subject = new ScrumMaster<State>();

    new Developer(master);
    new Developer(master);
    new Developer(master);

    console.log(`Planing has been started`);
    console.log(`Tha master add new task`);

    master.setState(["setup"]);
    master.setState(["setup", "develop"]);
    master.setState(["setup", "develop", "test"]);

    console.log(`Planing is over`);

})();
