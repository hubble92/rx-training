import {Aggregate, Contact, Iterator} from "./iface";
import {generateContacts} from "./utils";

export class ContactList implements Aggregate {
    constructor(private contacts: Contact[]) {
    }

    public iterator(): Iterator {
        return {
            next() {
                return null;
            },
            hasNext() {
                return null;
            },
        };
    }

}

const list: Contact[] = generateContacts(20);
