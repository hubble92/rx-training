import * as faker from "faker";
import {Contact} from "../iface";

export function generateContacts(count: number): Contact[] {
    const contacts: Contact[] = [];

    for (let i = 0; i < count; i++) {
        contacts.push({
            name: faker.name.findName(),
            surname: faker.name.lastName(),
        });
    }

    return contacts;
}
