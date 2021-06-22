import { types } from "../types/types";

const initialState = {
    active: {},
    cuentos: [],
    dibujos: [],
}

export const crudReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.crudSetActive:
            return {
                ...state,
                active: action.payload,
            };

        case types.curdReadCuentos:
            return {
                ...state,
                cuentos: action.payload
            }

        case types.curdCreateCuento:
            return {
                ...state,
                cuentos: [ action.payload, ...state.cuentos ],
                active: {},
            }

        case types.curdUpdateCuentos:
            return {
                ...state,
                cuentos: state.cuentos.map( c  =>
                    c.id === action.payload.id ? action.payload : c
                ),
                active: {},
            }

        case types.curdDeleteCuentos:
            return {
                ...state,
                cuentos: state.cuentos.filter( c  => c.id !== action.payload ),
                active: {},
            }

        case types.curdReadDibujos:
            return {
                ...state,
                dibujos: action.payload
            }

        case types.curdCreateDibujo:
            return {
                ...state,
                dibujos: [ action.payload, ...state.dibujos ],
            }
        
        default: 
            return state
    }
}