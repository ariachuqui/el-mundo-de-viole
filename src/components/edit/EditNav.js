import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setActive, startCreatingCuento, startDeletingCuento, startUpdatingCuento, startUploadImg } from '../../action/crud';
import { setActiveCrud, toggleShowSidebar } from '../../action/ui';

import { validateDelete } from '../../helpers/alerts';
import { createUrl, existCuento, validateCuento } from '../../helpers/validate-cuento';


export const EditNav = () => {
    //HOOKS
    const dispatch = useDispatch();
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
        const newUrl = createUrl( active.name );
        active.url = newUrl;

        //Validate
        const error = validateCuento( active, cuentos );
        if ( error )   
            return

        //create
        dispatch( startCreatingCuento( active ) );
        dispatch( setActiveCrud() );
        dispatch( toggleShowSidebar() );
    }

    const handleFileChange = ( e ) => {
        const img = e.target.files[0];
        dispatch( startUploadImg( img ) );
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

                {/* TODO: que solo aparezca cuando ya existe */}
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
