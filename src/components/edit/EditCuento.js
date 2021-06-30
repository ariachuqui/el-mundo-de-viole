import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setActive } from '../../action/crud';

import { toggleShowSidebar } from '../../action/ui';
import { useForm } from '../../hooks/useForm';
import { EditNav } from './EditNav';


export const EditCuento = () => {

    //HOOKS
    const dispatch = useDispatch();
    const { active } = useSelector(state => state.crud)
    const [ formValues, handleInputChange, reset] = useForm( active );
    const { showSidebar } = useSelector(state => state.ui)
    
    //DESTRUCTURING
    const { name, contain, imgUrl } = formValues;

    //USEEFFECTS
    const activeId = useRef( active.id );

    useEffect(() => {
        
        if( active.id !== activeId.current || active.imgUrl !== imgUrl ) {
            reset(active);
            activeId.current = active.id;
        }

    }, [active, reset, imgUrl]);

    useEffect(() => {
        
        dispatch( setActive(formValues) );

    }, [formValues, dispatch])

    // // Set formValues if active change (open cuento) : id
    // //Set formValues if activeImage Change : imgUrl
    // useEffect( () => {
    //     if ( id !== active.id || imgUrl !== active.imgUrl ) {
    //         reset(active);
    //     }
    // }, [active, reset, id, imgUrl] );

    // console.log(formValues);

    // //Set Active Values Redux
    // useEffect(() => {
    //     dispatch( setActive( formValues ) );
    // }, [ formValues, dispatch ])

    //FUNCTIONS onClick
    const toggleSidebar = () => {
        dispatch( toggleShowSidebar() );
        
    }

    return (
        <main className={`height-100 relative ${ showSidebar && 'edit__showsidebar'}`}>
            <i 
                className={`fas fa-chevron-right fa-2x color-white arrow arrow-left ${showSidebar && 'arrow-clicked'}`}
                onClick = { toggleSidebar }
            ></i>

            <EditNav />
            
            <div className="form-2 container">
                <input
                    type="text"
                    placeholder="Titulo"
                    className="input color-d-purple font-title"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                />

                {
                    ( imgUrl )
                        ?   <img
                                src={ imgUrl }
                                alt={ name }
                                className="edit__img img"
                            />
                        :   <p className="font-text"> Imagen no insertada </p>
                }


                <textarea
                    placeholder="Texto del Cuento"
                    className="textarea article-text font-100 color-black"
                    name="contain"
                    value={contain}
                    onChange={handleInputChange}
                ></textarea>
            </div> 

        </main>
    )
}
