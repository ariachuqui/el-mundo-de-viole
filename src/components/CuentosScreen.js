import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

import { Draw1 } from './ui/Draw1';

import { Searcher } from './ui/Searcher';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from './ui/Spinner';
import { getCuentosWhenScrolling } from '../action/crud';
import { uiPagination } from '../action/ui';

export const CuentosScreen = () => {

    const { cuentos } = useSelector(state => state.crud);
    const { loading, pagination } = useSelector(state => state.ui);
    const dispatch = useDispatch();

    const { page, search } = pagination;

    const handleNext = () => { 
        const nextPage = page + 1;
        dispatch( uiPagination( search, nextPage ))
        dispatch( getCuentosWhenScrolling() )
    }

    return (
        <main className="animate__animated animate__fadeInLeft" >
            <div className="showcase container">
                <div className="showcase__content relative">
                    <h2 className="showcase__title font-title color-purple">Los cuentos de Viole</h2>
                    <Draw1 />
                </div>
            </div>

            <Searcher />
        
            <section >
                <InfiniteScroll
                    dataLength={ cuentos.length }
                    next={ handleNext }
                    hasMore={ true }
                    scrollThreshold = '100%'
                    className="cuentos-screen_cuentos-container flex-between flex-wrap container"    
                >
                    {
                        cuentos.map(({ id, title, url }) => (
                            <Link 
                                to={ `/cuento/${ url }` }
                                className="cuentos-screen_cuento text-center" 
                                key={ id }
                            >
                                <article>
                                    <h2 className="cuentos-screen_title font-200 color-s-d-purple">{ title }</h2>
                                </article>
                            </Link>
                        ))
                    }
                </InfiniteScroll>
                
                {
                    loading &&
                        <Spinner />
                }
                {
                    cuentos.length === 0 
                    && <p className="font-200 color-purple container">Ningún cuento fue encontrado</p>
                }
            </section>
        </main>
    )
}
