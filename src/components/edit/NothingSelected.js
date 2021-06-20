import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { toggleShowSidebar } from '../../action/ui';

export const NothingSelected = () => {

    const { showSidebar } = useSelector(state => state.ui)
    const dispatch = useDispatch();

    const toggleSidebar = () => {
        dispatch( toggleShowSidebar() );
    }

    return (

        <main 
            className={`edit__nothing-container flex-center text-center relative
                        ${ showSidebar && 'edit__showsidebar'}`}
        >
            <i 
                class={`fas fa-chevron-right fa-2x color-white arrow arrow-left ${showSidebar && 'arrow-clicked'}`}
                onClick = { toggleSidebar }
            ></i>

            <p className="font-subtitle color-white">Selecciona 
                <br />
                o crea uno nuevo
            </p>
        </main>
    )
}