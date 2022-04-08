import { createAction, createReducer, INIT, on, UPDATE } from "@ngrx/store";


export const enum state {
    INIT = "INIT",
    UPDATED = "UPDATED",
};


const updateAction = createAction(
    "[List of items] updated"
);

export const ListReducer = createReducer(
    state.INIT,
    // on(updateAction, state.UPDATED)

);
