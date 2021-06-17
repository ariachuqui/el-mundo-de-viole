import React, { useState } from 'react';
import Masonry from 'react-masonry-css';

import { data } from '../data/data';

import { SingleDibujo } from './SingleDibujo';
import { Draw3 } from './ui/Draw3';

export const DibujosScreen = () => {

    const [{state, infoImg}, setShowImage] = useState({state: false, infoImg: false});

    const showImage = ( id, name, img ) => {

        const infoImg = { id, name, img}

        setShowImage( p => ({ ...p, state: true, infoImg}) )
    }
    const { dibujos } = data[0];

    const breakpointColumns = {
        default: 3,
        768: 2,
        500: 1
    };
      

    return (
        <div className="relative">
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
                        dibujos.map(({ id, name, img }) => (
                            <article
                                className="dibujos-item" 
                                key={ id }
                                onClick={ () => showImage(id, name, img) }
                            >
                                <img className="img" src={img} alt={name} />
                            </article>
                        ))
                    }
                </Masonry>
            </div>

            {
                state && <SingleDibujo infoImg={ infoImg } setShowImage={setShowImage}/>
            }
        </div>
    )
}
