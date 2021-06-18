import React from 'react';
import { Link } from 'react-router-dom';

import { Draw1 } from './ui/Draw1';

import { Searcher } from './ui/Searcher';
import { useSelector } from 'react-redux';

export const CuentosScreen = () => {

    const { cuentos } = useSelector(state => state.ui)

    return (
        <main className="animate__animated animate__fadeInLeft">
            <div className="showcase container">
                <div className="showcase__content relative">
                    <h2 className="showcase__title font-title color-purple">Los cuentos de Viole</h2>
                    <Draw1 />
                </div>
            </div>

            <Searcher cuentos={ true }/>
        
            <section className="cuentos-screen_cuentos-container flex-between flex-wrap container">
                {
                    cuentos.map(({ id, name, url }) => (
                        <Link 
                            to={ `/cuento/${ url }` }
                            className="cuentos-screen_cuento text-center" 
                            key={ id }
                        >
                            <article>
                                <h2 className="cuentos-screen_title font-200 color-s-d-purple">{ name }</h2>
                            </article>
                        </Link>
                    ))
                }
                {
                    cuentos.length === 0 
                    && <p className="font-200 color-purple">Ningún cuento fue encontrado</p>
                }
            </section>
        </main>
    )
}
