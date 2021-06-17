import React from 'react';

import { data } from '../data/data';

import { Details } from './ui/Details';
import { Draw2 } from './ui/Draw2';

export const SingleCuentoScreen = () => {

    const { name, contain } = data[0].cuentos[0];

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
