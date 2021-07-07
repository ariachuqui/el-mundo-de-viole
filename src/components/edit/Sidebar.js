import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { startLogout } from '../../action/auth';
import { getCuentosWhenScrolling, setActive } from '../../action/crud';
import { setActiveCrud, toggleShowSidebar, uiPagination } from '../../action/ui';

import { Spinner } from '../ui/Spinner';
import { Searcher } from '../ui/Searcher';

import { getCuentoByURL } from '../../helpers/getCuentoByURL';


export const Sidebar = () => {

    //HOOKS
    const { showSidebar, loading, pagination } = useSelector(state => state.ui)
    const { cuentos } = useSelector(state => state.crud)
    const dispatch = useDispatch();

    //VARIABLES
    const { page, search } = pagination;

    //FUNCTION SCROLLING
    const handleNext = () => { 
        const nextPage = page + 1;
        dispatch( uiPagination( search, nextPage ))
        dispatch( getCuentosWhenScrolling() )
    }

    //FUNCTIONS ONCLICK
    const toggleSidebar = () => {
        dispatch( toggleShowSidebar() );
    }

    const handleLogout = () => {
        dispatch( startLogout() )
    }

    const newCuento = (  ) => {
        dispatch( setActiveCrud("cuentos") );
        dispatch( toggleShowSidebar() );
        dispatch( setActive( {title:'', body:'', id: null, imgUrl:'', imgName:'photo'} ) );
    }

    const updateCuento = ( url ) => {
        const cuentoToUpdate = getCuentoByURL( url, cuentos );
        if( cuentoToUpdate ) {
            dispatch( setActiveCrud("cuentos")  );
            dispatch( toggleShowSidebar() );
            dispatch( setActive( cuentoToUpdate ) );
        }
    }

    const newDibujo = (  ) => {
        dispatch( setActiveCrud("dibujos")  );
        dispatch( toggleShowSidebar() );
    }

    return (
        <aside 
            id='scrollableDiv'
            className={`sidebar ${showSidebar && 'show-sidebar'}`}
        >
            <nav className="container flex-alignCenter">
                <div 
                    className="arrow arrow-right responsive-d-none"
                    onClick={ toggleSidebar }
                >
                    <i className="fas fa-chevron-left fa-2x color-purple"></i>
                </div>

                <h2 
                    className="sidebar__title font-title color-purple"
                >
                    Panel
                </h2>
                
            </nav>

            <div className="sidebar__line line"></div>

            <section className="sidebar__section">
                <h2 className="container font-subtitle color-black">Sesion</h2>
                <div 
                    className="sidebar-selection"
                    onClick={handleLogout}
                >
                    <div className="container flex-alignCenter">
                        <div className="sidebar__circle flex-center">
                            <i className="fas fa-sign-out-alt color-purple"></i>
                        </div>
                        <p className="margin-left-10 color-purple font-100">Cerrar Sesión</p>
                    </div>
                </div>
            </section>

            <div className="sidebar__line line"></div>

            <section className="sidebar__section">
                <h2 className="container font-subtitle color-black">Crear</h2>
                <div 
                    className="sidebar-selection"
                    onClick={ newDibujo }
                >
                    <div className="container flex-alignCenter">
                        <i className="fas fa-plus color-purple"></i>
                        <p className="margin-left-10 color-purple font-100">Editar Dibujos</p>
                    </div>
                </div>
                <div 
                    className="sidebar-selection"
                    onClick={ newCuento }
                >
                    <div className="container flex-alignCenter">
                        <i className="fas fa-plus color-purple"></i>
                        <p className="margin-left-10 color-purple font-100">Nuevo Cuento</p>
                    </div>
                </div>
            </section>

            <div className="sidebar__line line"></div>

            <section className="sidebar__section">
                <h2 className="container font-subtitle color-black">Cuentos Creados</h2>
            </section>

            <Searcher />

            <section className="">
                <InfiniteScroll
                    dataLength={ cuentos.length }
                    next={ handleNext }
                    hasMore={ true }
                    scrollThreshold = '100%'
                    scrollableTarget="scrollableDiv"
                    className="cuentos-screen_cuentos-container container"    
                >
                    {
                        cuentos.map(({ id, title, url }) => (
                            <article
                                className="edit__single-cuento cuentos-screen_cuento text-center" 
                                onClick={() => updateCuento( url )}
                                key={ id }
                            >
                                <h2 className="cuentos-screen_title font-100 color-s-d-purple">{ title }</h2>
                            </article>
                        ))
                    }
                </InfiniteScroll>

                {
                    loading &&
                        <Spinner />
                }

                {
                    cuentos.length === 0 
                    && <p className="font-200 color-purple">Ningún cuento fue encontrado</p>
                }
            </section>

        </aside>
    )
}
