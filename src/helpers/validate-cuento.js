import Swal from 'sweetalert2';

export const validateCuento = ( cuento, cuentos ) => {

    if ( !cuento.title.trim() ) {
        Swal.fire('Oops...', '¡El titulo es obligatorio!', 'error')
        return true
    }

    const isCuentoExist = cuentos.find( c => c.url === cuento.url );

    if ( isCuentoExist ) {
        Swal.fire('Oops...', '¡El titulo no es valido, cambialo!', 'error')
        return true
    }

    return false
}

export const createUrl = ( title = '' ) => {
    return title.normalize('NFD').replace(/[\u0300-\u036f¿_.~!*''();:@&=+$,/?#[%-+'\]]/g,"").replace(/ /g, "-").toLowerCase();
}

export const existCuento = ( id, cuentos ) => {
    return cuentos.find( c => c.id === id );
}