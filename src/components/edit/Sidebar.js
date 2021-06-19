import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { toggleShowSidebar } from '../../action/ui';

export const Sidebar = () => {

    const { showSidebar } = useSelector(state => state.ui)
    const dispatch = useDispatch();

    const toggleSidebar = () => {
        dispatch( toggleShowSidebar() );
    }


    return (
        <aside className={`sidebar ${showSidebar && 'show-sidebar'}`}>
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
                    // onClick={handleLogout}
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
                <div className="sidebar-selection">
                    <div className="container flex-alignCenter">
                        <i className="fas fa-plus color-purple"></i>
                        <p className="margin-left-10 color-purple font-100">Nuevo Ceunto</p>
                    </div>
                </div>
                <div className="sidebar-selection">
                    <div className="container flex-alignCenter">
                        <i className="fas fa-plus color-purple"></i>
                        <p className="margin-left-10 color-purple font-100">Nuevo Dibujo</p>
                    </div>
                </div>
            </section>

            <div className="sidebar__line line"></div>

            <section className="sidebar__section">
                <h2 className="container font-subtitle color-black">Cuentos Creados</h2>
            </section>

        </aside>
    )
}
