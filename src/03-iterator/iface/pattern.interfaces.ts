export interface Iterator {
    next(): any;

    hasNext(): boolean;
}

export interface Aggregate {
    iterator(): Iterator;
}
