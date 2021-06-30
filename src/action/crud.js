import Swal from "sweetalert2";
import { types } from "../types/types";

import { data } from "../data/data";
import { imgUpload } from "../helpers/imgUpload";
import { fetchWithoutToken, fetchFileWithToken } from "../helpers/fetch";

//******************* GENERAL *******************
//ASYNC 
export const startUploadImg = ( img ) => {
    return async(dispatch, getState) => { 
        const { active } = getState().crud;

        const formData = new FormData();
        formData.append( 'file', img );

        const res = await fetchFileWithToken('uploads/', formData, 'POST');
        const body = await res.json();
        console.log(body);

        if( body.imgUrl && body.imgName ) {
            const {imgUrl, imgName} = body;
            dispatch( setActive( { ...active, imgUrl, imgName } ) ) 
        }
    }

}

//SYNC
export const setActive = ( active ) => ({
    type: types.crudSetActive,
    payload: active
});

//******************* CUENTOS *******************
//ASYNC 
export const startSearchigCuentos = ( search = '' ) => {
    const { cuentos } = data[0];

    if( search === '' ){
        return (dispatch) => { dispatch( readCuentos( cuentos ) ) }
    }

    //Get cuentos that match your search
    const cuentosSearched = cuentos.filter( c => c.name.toLowerCase().includes( search.toLowerCase() ) );

    return (dispatch) => {
        dispatch( readCuentos( cuentosSearched ));
    }
}

export const startCreatingCuento = ( cuento ) => {
    //save in db
    //create id and save in frontend
    return (dispatch) =>  { dispatch( createCuento( cuento ) ) };
}

export const startUpdatingCuento = ( cuento ) => {
    //find cuento by id
    //update in db
    return (dispatch) =>  { dispatch( updateCuento( cuento ) ) };
}

export const startDeletingCuento = ( id ) => {
    //find cuento by id
    //delete physically in db
    return (dispatch) =>  { dispatch( deleteCuento( id ) ) };
}

//SYNC
const readCuentos = ( arr ) => ({
    type: types.curdReadCuentos,
    payload: arr
});

const createCuento = ( cuento ) => ({
    type: types.curdCreateCuento,
    payload: cuento
})

const updateCuento = ( cuento ) => ({
    type: types.curdUpdateCuentos,
    payload: cuento
})

const deleteCuento = ( id ) => ({
    type: types.curdDeleteCuentos,
    payload: id
})


//******************* DIBUJOS *******************
//ASYNC 
export const startReadingDibujos = () => {
    return async(dispatch) => {

        const res = await fetchWithoutToken('dibujos/?limit=10');
        const { dibujos } = await res.json();

        if( dibujos.length !== 0 ) {
            dispatch( readDibujos( dibujos ) );
        }
    }
}

export const startCreatingDibujo = ( img ) => {
    return async(dispatch) =>  {
        //create a swal loading
        Swal.fire({
            title: 'Subiendo dibujo.',
            text: 'Por favor espere...',
            showConfirmButton: false,
            allowOutsideClick: false,
            willOpen: () => {
                Swal.showLoading();
            },
        });

        //upload image
        const imgUrl = await imgUpload( img );
        Swal.close();
        //create id 
        //create {img: '' ,id: '' }
        //save in db
        //create in frontend
        const newDibujo = { img: imgUrl, id: '123' }

         dispatch( createDibujo( newDibujo ) ) 
    };
}


//SYNC
const readDibujos = ( arr ) => ({
    type: types.curdReadDibujos,
    payload: arr
});

const createDibujo = ( dibujo ) => ({
    type: types.curdCreateDibujo,
    payload: dibujo
});










