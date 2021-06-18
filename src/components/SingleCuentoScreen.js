import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { getCuentoByURL } from '../helpers/getCuentoByURL';

import { Details } from './ui/Details';
import { Draw2 } from './ui/Draw2';

export const SingleCuentoScreen = () => {

    const { url } = useParams();

    //can found one or not(404)
    const cuento = getCuentoByURL( url );

    //error 404
    if( !cuento )  
        return <Redirect to="/"/>

    //if we find it, we use it
    const {name , contain} = cuento;

    return (
        <div className="single-cuento relative">

            <div className="showcase container">
                <div className="showcase__content">
                    <h2 className="showcase__title font-title color-purple">{ name }</h2>
                    <Draw2 />
                </div>
            </div>

            <div className="single-cuento__container relative">
                <p className="article-text font-100 color-black">
                    {contain}
                </p>
            </div>

            <Details />
        </div>
    )
}
