import React, { useState } from 'react';
import { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { getCuentoByUrlRequest } from '../helpers/getCuentoByURL';

import { Details } from './ui/Details';
import { Draw2 } from './ui/Draw2';

export const SingleCuentoScreen = () => {

    const [cuento, setCuento] = useState({})
    const { url } = useParams();

    //can found one or not(404)
    useEffect(() => {
        const getCuento = async() => {
            const cuento = await getCuentoByUrlRequest( url );
            setCuento( cuento );
        }
        getCuento();
    }, [ url ])

    //error 404
    if( !cuento )  
        return <Redirect to="/"/>

    //if we find it, we use it
    const {title , body, imgUrl, imgName} = cuento;

    return (
        <div className="single-cuento relative">

            <div className="showcase container">
                <div className="showcase__content">
                    <h2 className="showcase__title font-title color-purple">{ title }</h2>
                    <Draw2 />
                </div>
            </div>

            <div className="single-cuento__container relative">
                {
                    ( imgUrl ) &&
                        <img
                            src={ imgUrl }
                            alt={ imgName }
                            className="img"
                        />
                }

                <p className="article-text font-100 color-black">
                    {body}
                </p>
            </div>

            <Details />
        </div>
    )
}
