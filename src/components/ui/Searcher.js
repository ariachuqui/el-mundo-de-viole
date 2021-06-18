import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { startSearchigCuentos } from '../../action/ui';

import { useForm } from '../../hooks/useForm';

export const Searcher = ({ cuentos = false }) => {

    const dispatch = useDispatch(0);
    const [ { search }, handleInputChange ] = useForm();

    useEffect(() => {
        
        if( cuentos )
            dispatch( startSearchigCuentos( search ) )

    }, [search])

    return (
        <form className="nav__form container">
            <input 
                className="search" 
                type="text"
                required
                name="search"
                value={ search }
                onChange={ handleInputChange }
                autoComplete = 'off'
                placeholder="Search"
            />
        </form>
    )
}
