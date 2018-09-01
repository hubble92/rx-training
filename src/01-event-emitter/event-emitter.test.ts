import {sub} from "./event-emitter";

test("sub func", () => {
    expect(sub(2, 2)).toEqual(4);
});
