import Swal from 'sweetalert2';
import { types } from "../types/types";
import { setLoading } from "./ui"

import { imgUpload } from "../helpers/imgUpload";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { loadingAlert } from '../helpers/alerts';

//******************* GENERAL *******************
//ASYNC 
export const startUploadImg = ( img ) => {
    return async(dispatch, getState) => { 
        const { active } = getState().crud;

        const body = await imgUpload( img );

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
export const getCuentosWhenScrolling = ( reset = false, limit = 10 ) => {
     return async( dispatch, getState ) => {
        const { pagination } = getState().ui;
        const { search, page } = pagination;

        //We "reset" cuentos and then we do the specific search
        if( reset ) {
            dispatch( resetCuentos() );
        }

        //Get cuentos when scrolling and with the specific search
        try {
            dispatch( setLoading( true ) );
            
            const skip = page * limit;

            const resp = await fetchWithoutToken( `cuento/?limit=${ limit }&skip=${ skip }&search=${ search }` );
            if ( !resp.ok ) {
                return console.error( 'No se pudieron obtener los cuentos.' );
            }
            
            const { cuentos } = await resp.json();

            dispatch( setLoading( false ) );
            dispatch( scrollingCuentos( cuentos ) );
            
        } catch (error) {
            console.log(error)
            dispatch( setLoading( false ) );
        }

    }
}

export const startCreatingCuento = ( cuento ) => {

    return async( dispatch ) => {   

        try {
            loadingAlert('Creando cuento.')

            cuento.date = new Date().getTime();

            // request to backend
            const resp = await fetchWithToken( 'cuento', cuento, 'POST' );

            const { newCuento } = await resp.json();

            Swal.close();

            if ( !resp.ok ) {
               return Swal.fire( 'Ha habido un error al crear el cuento.' );
            }

            //save in frontend
            dispatch( createCuento( newCuento ) );

        } catch (error) {
            console.log(error);
            return Swal.fire( 'Ha habido un error al crear el cuento.' );
        }

    };
}

export const startUpdatingCuento = ( cuento ) => {

    return async(dispatch) => {
        
        // request to backend
        try {
            loadingAlert('Actualizando cuento.')

            const resp = await fetchWithToken( `cuento/${ cuento.id }`, cuento, 'PUT' );

            Swal.close();

            if ( !resp.ok ) {
               return Swal.fire( 'Ha habido un error al actualizar el cuento.' );
            }

            dispatch( updateCuento( cuento ) );

        } catch (error) {
            console.log(error);
            Swal.fire( 'Ha habido un error al actualizar el cuento.' );
        }
    };
}

export const startDeletingCuento = ( id ) => {

    return async(dispatch) =>  {
        try {
            loadingAlert('Borrando cuento.')
            
            // request to backend
            const resp = await fetchWithToken( `cuento/${ id }`, undefined, 'DELETE' );

            Swal.close();

            if ( !resp.ok ) {
               return Swal.fire( 'Ha habido un error al borrar el cuento.' );
            }
            
            dispatch( deleteCuento( id ) );

        } catch (error) {
            console.log(error);
            Swal.fire( 'Ha habido un error al borrar el cuento.' );
        }
    };
}

//SYNC
const resetCuentos = ( arr ) => ({ type: types.crudResetCuentos });

const scrollingCuentos = ( arr ) => ({
    type: types.crudScrollingCuentos,
    payload: arr
})

const createCuento = ( cuento ) => ({
    type: types.crudCreateCuento,
    payload: cuento
})

const updateCuento = ( cuento ) => ({
    type: types.crudUpdateCuentos,
    payload: cuento
})

const deleteCuento = ( id ) => ({
    type: types.crudDeleteCuentos,
    payload: id
})


//******************* DIBUJOS *******************
//ASYNC 
export const startReadingDibujos = ( limit = 10 ) => {
    return async(dispatch) => {

        const res = await fetchWithoutToken(`dibujos/?limit=${ limit }`);
        const { dibujos } = await res.json();

        if( dibujos.length !== 0 ) {
            dispatch( readDibujos( dibujos ) );
        }
    }
}

export const getDibujosWhenScrolling = ( page = 1, limit = 10 ) => {
    return async( dispatch) => {
        //Get dibujos when scrolling 
        try {
            dispatch( setLoading( true ) );
            const skip = page * limit;

            const resp = await fetchWithoutToken( `dibujos/?limit=${ limit }&skip=${ skip }` );
            if ( !resp.ok ) {
                return console.error( 'No se pudieron obtener los dibujos.' );
            }
            
            const { dibujos } = await resp.json();

            dispatch( setLoading( false ) );
            dispatch( scrollingDibujos( dibujos ) );
            
        } catch (error) {
            console.log(error)
            dispatch( setLoading( false ) );
        }
    }
}

export const startCreatingDibujo = ( img ) => {
    return async(dispatch) =>  {
        //create a swal loading
        loadingAlert('Subiendo dibujo.');
        const body = await imgUpload( img );
        body.date = new Date().getTime();
        
        //save in db
        const resp = await fetchWithToken( 'dibujos', body, 'POST' );
        const { newDibujo } = await resp.json();


        //create in frontend
        dispatch( createDibujo( newDibujo ) ) 
        Swal.close();
    };
}

export const startDeletingDibujo = ( id ) => {
    
    return async( dispatch ) => {

        try {
            loadingAlert('Borrando dibujo.')

            const resp = await fetchWithToken( `uploads/dibujos/${ id }`, undefined, 'DELETE' );

            Swal.close();

            if ( !resp.ok ) {
               return Swal.fire( 'Ha habido un error al borrar el dibujo.' );
            }
            
            dispatch( deleteDibujo( id ) );

        } catch (error) {
            console.log(error);
            Swal.fire( 'Ha habido un error al borrar el dibujo.' );
        }
    } 
}


//SYNC
const readDibujos = ( arr ) => ({
    type: types.crudReadDibujos,
    payload: arr
});

const scrollingDibujos = ( arr ) => ({
    type: types.crudScrollingDibujos,
    payload: arr
})

const createDibujo = ( dibujo ) => ({
    type: types.crudCreateDibujo,
    payload: dibujo
});

const deleteDibujo = ( id ) => ({
    type: types.crudDeleteDibujos,
    payload: id
})










