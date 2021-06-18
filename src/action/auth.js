import { types } from "../types/types"

export const startLogin = ( name, password ) => {
    
    return ( dispatch ) => {

        // fetch bla bla

            // .then dispatch( login( email, password ) ) 

            // .catch error

        dispatch( login( "123", "viole" ) );
    }
}

const login = ( id, name ) => ({
    type: types.authLogin,
    payload: { name, id }
})

export const logout = () => ({
    type: types.authLogout
})