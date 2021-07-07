import Swal from "sweetalert2";


const baseUrl = process.env.REACT_APP_API_URL;

export const imgUpload = async( img, endpoint = 'uploads/' ) => {

    const url = `${ baseUrl }/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    const formData = new FormData();
    formData.append( 'file', img );

    try {   
        const res = await fetch( url, {
            method: 'POST',
            headers: {
                'x-token': token 
            },
            body: formData
        })

        const data = await res.json();

        if ( data.imgUrl && data.imgName ) {
            return data;
        }
        
    } catch (err) {
        Swal.fire( '', 'Hubo un error, intentelo más tarde.', 'error');
    }
}
