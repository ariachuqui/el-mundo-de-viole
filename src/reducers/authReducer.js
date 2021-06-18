import { types } from "../types/types";

export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {

        case types.authLogin:
            return {
                ...state,
                name: action.payload.name,
                id: action.payload.id,
            }

        case types.authLogout:
            return {}
    
        default:
            return state;
    }
}
