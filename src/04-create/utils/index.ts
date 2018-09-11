export function createSubscription(name: string) {
    type Value = number | string | object | Error;
    return {
        next(value: Value) {
            console.log(`Next: ${name} : ${value}`);
        },
        error(err: Value) {
            console.log(`Error: ${name} : ${err}`);
        },
        complete() {
            console.log(`Complete: ${name}`);
        },
    };
}
