import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { startSearchigCuentos } from '../../action/crud';

import { useForm } from '../../hooks/useForm';

export const Searcher = () => {

    const dispatch = useDispatch(0);
    const [ { search }, handleInputChange ] = useForm();

    useEffect(() => {
        dispatch( startSearchigCuentos( search ) )
    }, [search, dispatch])

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
