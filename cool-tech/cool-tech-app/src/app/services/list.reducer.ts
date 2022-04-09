import { createAction, createReducer, INIT, on, UPDATE } from "@ngrx/store";


export const enum stateE {
    INIT = "INIT",
    UPDATED = "UPDATED"
};


const updateAction = createAction(
    "[List of items] updated"
);

export const ListReducer = createReducer(
    stateE.INIT,
    // on(updateAction, (stateE) => stateE = stateE.UPDATED)

);
