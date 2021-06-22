import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { useSelector } from 'react-redux';

import { SingleDibujo } from './SingleDibujo';
import { Draw3 } from './ui/Draw3';

export const DibujosScreen = () => {

    const [{state, infoImg}, setShowImage] = useState({state: false, infoImg: false});
    const { dibujos } = useSelector(state => state.crud)

    const showImage = ( id, img ) => {

        const infoImg = { id, img}

        setShowImage( p => ({ ...p, state: true, infoImg}) )
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
    
                <div className="flex-center">
                    <Masonry
                        breakpointCols={ breakpointColumns }
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {
                            dibujos.map(({ id, img }) => (
                                <article
                                    className="dibujos-item" 
                                    key={ id }
                                    onClick={ () => showImage(id, img) }
                                >
                                    <img className="img" src={img} alt={img} />
                                </article>
                            ))
                        }
                    </Masonry>
                </div>
            </div>   
            {
                state && <SingleDibujo infoImg={ infoImg } setShowImage={setShowImage}/>
            }
        </div>
    )
}
