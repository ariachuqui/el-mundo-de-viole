import { types } from "../types/types";

const initialState = { 
    cuentos: [],
    showSidebar: true,
    activeCrud: null,
}

export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.uiShowSidebar:
            return {
                ...state,
                showSidebar: state.showSidebar ? false : true
            }

        case types.uiSetActiveCrud:
            return {
                    ...state,
                    activeCrud: action.payload
            };

        default:
            return state;
    }
}