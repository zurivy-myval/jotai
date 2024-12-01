import { atom } from "jotai";
import { loadable } from "jotai/utils";

export const counterAtom = atom(0);

/* This is derived state example - good for shopping cart for example, for example to hold total price of items in cart */
export const doubledCounterArtom = atom((get) => get(counterAtom ) * 2);

/* Async atom - good for fetching data from API */
const asyncUserAtom = atom(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return response.json();
})

export const loadableUserAtom = loadable(asyncUserAtom);