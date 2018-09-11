import {IObserver, IObserverPattern, IState} from "./iface";


class TodoList implements IObserverPattern<IState> {
    public list: IObserver[] = [];
    public state: IState;

    getState() {
        return this.state;
    }

    setState(state: IState) {
        this.state = state;
        this.notifyAllObservers();
    }

    attach(observer: IObserver) {
        this.list.push(observer);
    }

    notifyAllObservers() {
        this.list.forEach(listener => listener.update());
    }

}

const listener: IObserver = {
    update() {
        console.log('Listener 1 informed');
    }
};

const listener2: IObserver = {
    update() {
        console.log('Listener 2 informed');
    }
};

(function () {
    const task = new TodoList();

    task.attach(listener);
    task.attach(listener2);

    task.setState({ tasks: ['wake up', 'to have breakfast', 'brush teeth'] });

    console.log('Everybody informed');

    console.log(task.getState());

})();


