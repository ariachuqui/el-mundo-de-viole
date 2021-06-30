import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";


//ASYNC
export const startLogin = ( name, password ) => {
    
    return async( dispatch ) => {

        const res = await fetchWithoutToken('auth/login', {name, password}, 'POST');
        const body = await res.json();
        
        if( body.token ) {
            const {token, user} = body;
            //stograge token
            localStorage.setItem('token', token);

            dispatch( login( user.id ) );
        }

    }
}

export const startCheking = () => {
    return async( dispatch ) => { 
        const res = await fetchWithToken( 'auth/renew' );
        const body = await res.json();

        if( body.token) {
            localStorage.setItem('token', body.token)
            dispatch( login( body.uid ) );

        } else {
            dispatch( checkingFinish() );
        }
    }
}

//SYNC
const login = ( id ) => ({
    type: types.authLogin,
    payload: id
})

export const startLogout = () => {
    return ( dispatch ) => {
        //clear token
        localStorage.clear();

        dispatch( logout() );
    }
};

const logout = () => ({
    type: types.authLogout
})

const checkingFinish = () => ({ type: types.authCheckingFinish})