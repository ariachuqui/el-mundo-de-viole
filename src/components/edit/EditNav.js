import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startCreatingCuento, startDeletingCuento, startUpdatingCuento, startUploadImg } from '../../action/crud';
import { setActiveCrud, setImgEditCuento, toggleShowSidebar } from '../../action/ui';

import { validateDelete } from '../../helpers/alerts';
import { createUrl, existCuento, validateCuento } from '../../helpers/validate-cuento';


export const EditNav = () => {
    //HOOKS
    const dispatch = useDispatch();
    const [img, setImg] = useState(null)
    const { active, cuentos } = useSelector(state => state.crud);

    //FUNCTIONS ONCLICK
    const handlePictureUpload = () => {
        document.querySelector("#inputFile").click();
    };

    const handleDelete = async() => {
        const isDeleted = await validateDelete('el cuento');
        
        if ( isDeleted ) {
            dispatch( startDeletingCuento( active.id ) );
            dispatch( setActiveCrud() );
            dispatch( toggleShowSidebar() );
        }
    }

    const handleSave = () => {
        // isCuentoExist ? updateCuento : CreateCuento
        const isCuentoExist = existCuento( active.id, cuentos );
        
        //Update
        if( isCuentoExist ) {
            dispatch( startUpdatingCuento( active ) );
            dispatch( setActiveCrud() );
            dispatch( toggleShowSidebar() );
            return
        }

        //Create
        //Create url
        const newUrl = createUrl( active.title );
        active.url = newUrl;

        //Validate
        const error = validateCuento( active, cuentos );
        if ( error )   
            return

        //create
        if( img ) {
            dispatch( startUploadImg( img ) );
            setImg( null );
        }
        dispatch( startCreatingCuento( active ) );
        dispatch( setActiveCrud() );
        dispatch( setImgEditCuento( null ) );
        dispatch( toggleShowSidebar() );
    }

    const handleFileChange = ( e ) => {
        let imgFile = e.target.files[0];
        if ( imgFile ) {
            setImg( imgFile );
            imgFile = URL.createObjectURL( imgFile );
            dispatch( setImgEditCuento( imgFile ) );
        }
    }


    return (
        <nav className="edit__nav">
            <div className="article-edit__appbar flex-center container relative">
                <input
                    id="inputFile"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
    
    
                <div 
                    className="edit__nav-foto"
                    onClick={handlePictureUpload}
                >
                    <i className="fas fa-camera"></i>
                    <p className="font-100">Foto</p>
                </div>


                <button 
                    className="edit__nav-btn color-white margin-left-10"  
                    onClick={handleSave}
                >
                    Save
                </button>

                <button
                    className="edit__nav-btn edit__nav-btn-delete margin-left-10"
                    onClick={ handleDelete }
                >
                    Delete
                </button>
            </div>
        </nav>
    )
}
