import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
import { useDispatch, useSelector } from 'react-redux';
import { getDibujosWhenScrolling } from '../action/crud';

import { Spinner } from './ui/Spinner';
import { SingleDibujo } from './SingleDibujo';
import { Draw3 } from './ui/Draw3';

export const DibujosScreen = () => {

    const [{state, infoImg}, setShowImage] = useState({state: false, infoImg: false});
    const [page, setPage] = useState( 1 )
    const { dibujos } = useSelector(state => state.crud)
    const { loading } = useSelector(state => state.ui);
    const dispatch = useDispatch();

    const showImage = ( id, imgUrl, imgName ) => {

        const infoImg = { id, imgUrl, imgName}

        setShowImage( p => ({ ...p, state: true, infoImg}) )
    }

    const handleNext = () => { 
        const nextPage = page + 1;
        setPage( nextPage );
        dispatch( getDibujosWhenScrolling( page ) )
    }

    const breakpointColumns = {
        default: 3,
        768: 2,
        500: 1
    };
      

    return (
        <div>
           <div className="animate__animated animate__fadeInRight">
               <div className="showcase container">
                    <div className="showcase__content relative">
                        <h2 className="showcase__title font-title color-purple">Los dibujos de Viole</h2>
                        <Draw3 />
                    </div>
                </div>
    
                <InfiniteScroll
                    dataLength={ dibujos.length }
                    next={ handleNext }
                    hasMore={ true }
                    scrollThreshold = '100%'
                    className="flex-center"    
                >
                    <Masonry
                        breakpointCols={ breakpointColumns }
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {
                            dibujos.map(({ id, imgUrl, imgName }) => (
                                <article
                                    className="dibujos-item" 
                                    key={ id }
                                    onClick={ () => showImage(id, imgUrl, imgName) }
                                >
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
            </div>   
            {
                state && <SingleDibujo infoImg={ infoImg } setShowImage={setShowImage}/>
            }
        </div>
    )
}
