import React from 'react';

import { Draw1 } from './ui/Draw1';

import { data } from '../data/data';
import { Searcher } from './ui/Searcher';

export const CuentosScreen = () => {
    const { cuentos } = data[0];

    return (
        <main>
            <div className="showcase container">
                <div className="showcase__content relative">
                    <h2 className="showcase__title font-title color-purple">Los cuentos de Viole</h2>
                    <Draw1 />
                </div>
            </div>

            <Searcher />
        
            <section className="cuentos-screen_cuentos-container flex-between flex-wrap container">
                {
                    cuentos.map(({ id, name }) => (
                        <article
                            className="cuentos-screen_cuento text-center" 
                            key={ id }
                        >
                            <h2 className="cuentos-screen_title font-200 color-s-d-purple">{ name }</h2>
                        </article>
                    ))
                }
            </section>
        </main>
    )
}
