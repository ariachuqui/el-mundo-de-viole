import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { toggleShowSidebar } from '../../action/ui';

export const EditDibujos = () => {
    const { showSidebar } = useSelector(state => state.ui)
    const dispatch = useDispatch();

    const toggleSidebar = () => {
        dispatch( toggleShowSidebar() );
    }

    return (
        <main className={`height-100 relative ${ showSidebar && 'edit__showsidebar'}`}>
            <i 
                class={`fas fa-chevron-right fa-2x color-purple arrow arrow-left ${showSidebar && 'arrow-clicked'}`}
                onClick = { toggleSidebar }
            ></i>

            <h1>Edit Dibujo Screen</h1>
        </main>
    )
}
