import Swal from "sweetalert2";
import { fetchWithoutToken } from "./fetch";

export const getCuentoByURL = ( url, cuentos ) => cuentos.find( c => c.url === url )

export const getCuentoByUrlRequest = async( url = '' ) => {

    try {
        const res = await fetchWithoutToken( `cuento/${ url }` );
        if( !res.ok ) {
            Swal.fire('Oops...', 'Hubo un error!', 'error')
            return
        }
        const { cuento } = await res.json();
        return cuento;
        
    } catch (error) {
        console.error();
    }

}