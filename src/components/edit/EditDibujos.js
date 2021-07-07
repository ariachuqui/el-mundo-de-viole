import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from 'react-masonry-css';

import { toggleShowSidebar } from '../../action/ui';

import { Spinner } from '../ui/Spinner';

import { validateDelete } from '../../helpers/alerts';
import { getDibujosWhenScrolling, startCreatingDibujo, startDeletingDibujo } from '../../action/crud';


export const EditDibujos = () => {

     //HOOKS
    const { showSidebar } = useSelector(state => state.ui)
    const { dibujos } = useSelector(state => state.crud)
    const { loading } = useSelector(state => state.ui);
    const [page, setPage] = useState( 1 )
    const dispatch = useDispatch();

    //VARIABLES
    const breakpointColumns = {
        default: 3,
        768: 2,
        500: 1
    };

    //FUNCTION ON SCROLLING
    const handleNext = () => { 
        const nextPage = page + 1;
        setPage( nextPage );
        dispatch( getDibujosWhenScrolling( page ) )
    }

    //FUNCTIONS ONCLICK
    const toggleSidebar = () => {
        dispatch( toggleShowSidebar() );
    };

    const handleAddDibujo = ( e ) => {
        const img = e.target.files[0];
        if( !img ) return; 
        //upload image
        dispatch( startCreatingDibujo( img ) );

    }

    const handleDelete = async( id ) => {
        const isDeleted = await validateDelete('la foto');
        
        if ( isDeleted ) {
            
            dispatch( startDeletingDibujo( id ) );
        }
    }
    
    return (
         
        <div className={`height-100 relative ${ showSidebar && 'edit__showsidebar'}`}>
            <i 
                className={`fas fa-chevron-right fa-2x color-purple arrow arrow-left ${showSidebar && 'arrow-clicked'}`}
                onClick = { toggleSidebar }
            ></i>

            <InfiniteScroll
                    dataLength={ dibujos.length  }
                    next={ handleNext }
                    hasMore={ true }
                    scrollThreshold = '100%'
                    className="flex-center edit__dibujos"    
            >
                <Masonry
                    breakpointCols={ breakpointColumns }
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >

                    {/* div to add photo */}                     
                    <div
                        className="edit-dibujos__add text-center btn btn-2"
                        onClick={ () => document.querySelector('#add_photos_input').click() }
                    >
                        <p>Agregar foto</p>
                    </div>

                    {/* Creation of each photo  */} 
                    {
                        dibujos.map(({ id, imgName, imgUrl }) => (
                            <article
                                className="dibujos-item relative" 
                                onClick={ () => handleDelete( id ) }
                                key={ id }
                            >   
                                <i className="edit__delete fas fa-trash fa-4x absolute"></i>
                                <img className="img" src={imgUrl} alt={imgName} />
                            </article>
                        ))
                    }
                </Masonry>
            </InfiniteScroll>
            
            {
                loading &&
                    <Spinner />
            }

            {/* input to add photo */}
            <input
                type="file"
                id="add_photos_input"
                style={{ display: "none" }}
                onChange={ handleAddDibujo }
                multiple
            />

        </div>
    )
}
    