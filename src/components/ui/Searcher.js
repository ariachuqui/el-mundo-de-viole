import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCuentosWhenScrolling } from '../../action/crud';
import { uiPagination } from '../../action/ui';

import { useForm } from '../../hooks/useForm';

export const Searcher = () => {

    const dispatch = useDispatch(0);
    const [ { search }, handleInputChange ] = useForm({
        search: ''
    });

    useEffect(() => {
        dispatch( uiPagination(search, 0));
        dispatch( getCuentosWhenScrolling( true ) )
    }, [search, dispatch])

    return (
        <form 
            className="nav__form container" 
            onSubmit={ e => e.preventDefault() }
        >
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
