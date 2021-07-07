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

        case types.crudResetCuentos:
            return {
                ...state,
                cuentos: []
            }

        case types.crudScrollingCuentos:
            return {
                ...state,
                cuentos: [ ...state.cuentos, ...action.payload ]
            }

        case types.crudCreateCuento:
            return {
                ...state,
                cuentos: [ action.payload, ...state.cuentos ],
                active: {},
            }

        case types.crudUpdateCuentos:
            return {
                ...state,
                cuentos: state.cuentos.map( c  =>
                    c.id === action.payload.id ? action.payload : c
                ),
                active: {},
            }

        case types.crudDeleteCuentos:
            return {
                ...state,
                cuentos: state.cuentos.filter( c  => c.id !== action.payload ),
                active: {},
            }
        

        case types.crudReadDibujos:
            return {
                ...state,
                dibujos: action.payload
            }
        case types.crudScrollingDibujos:
            return {
                ...state,
                dibujos: [ ...state.dibujos, ...action.payload ]
            }

        case types.crudCreateDibujo:
            return {
                ...state,
                dibujos: [ action.payload, ...state.dibujos ],
            }

        case types.crudDeleteDibujos:
            return {
                ...state,
                dibujos: state.dibujos.filter( dibujo => dibujo.id !== action.payload ),
            }
        
        default: 
            return state
    }
}