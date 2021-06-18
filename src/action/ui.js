import { types } from "../types/types";

import { data } from "../data/data";

export const startSearchigCuentos = ( search = '' ) => {
    const { cuentos } = data[0];

    if( search === '' ){
        return (dispatch) => { dispatch(cuentosFound( cuentos )) }
    }

    //Get cuentos that match your search
    const cuentosSearched = cuentos.filter( c => c.name.includes( search ) );

    return (dispatch) => {
        dispatch( cuentosFound( cuentosSearched ));
    }
}

const cuentosFound = ( arr ) => ({
    type: types.uiGetAllCuentos,
    payload: arr
})