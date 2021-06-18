import { types } from "../types/types";

const initialState = { 
    cuentos: [],
}

export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.uiGetAllCuentos:
            return {
                ...state,
                cuentos: action.payload
            }

        default:
            return state;
    }
}