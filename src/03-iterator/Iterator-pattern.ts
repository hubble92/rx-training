import {Aggregate, Contact, Iterator} from "./iface";
import {generateContacts} from "./utils";

export class ContactList implements Aggregate {
    constructor(private contactList: Contact[]) {
    }

    public getIterator(): Iterator {
        const self = this;
        let index: number = 0;

        return {
            next() {
                const {name, surname} = self.contactList[index++];
                return `${name} ${surname}`;
            },
            hasNext() {
                return index < self.contactList.length;
            },
        };
    }
}


const contacts: ContactList = new ContactList(generateContacts(3));

const iterator: Iterator = contacts.getIterator();

while (iterator.hasNext()) {
    console.log(`${iterator.next()}`);
}


// Iterator in es6
// function range(start: number, end: number) {
//     return {
//         [Symbol.iterator]() {
//             return this;
//         },
//         next() {
//             if (start < end) {
//                 return {value: start++, done: false};
//             }
//             return {done: true, value: end};
//         },
//     };
// }

// for (const num of range(1, 5)) {
//     console.log(num);
// }
