import Swal from 'sweetalert2';

import { toCapitalize } from './toCapitalize';

export const validateDelete = async( thingToEliminate = ''  ) => {
    let res;

    await Swal.fire({
      title: `¿Seguro que quieres eliminar ${ thingToEliminate }?`,
      text: 'Es permanente!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Si, borralo!',
      cancelButtonText: 'No, dejalo'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Borrado!',
          `${ toCapitalize( thingToEliminate ) } fue eliminado.`,
          'success'
        )
        res = true;
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          `${toCapitalize( thingToEliminate )} está a salvo :)`,
          'error'
        )
        res = false;
      }
    })

    return res;
}

export const loadingAlert = ( msg = '' ) => {
    Swal.fire({
      title: msg,
      text: 'Por favor espere...',
      showConfirmButton: false,
      allowOutsideClick: false,
      willOpen: () => {
          Swal.showLoading();
      },
  });
  }