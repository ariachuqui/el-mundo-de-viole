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
    const { showSidebar, imgEditCuento } = useSelector(state => state.ui)
    const [ formValues, handleInputChange, reset] = useForm( active );
    
    //DESTRUCTURING
    const { title, body, imgUrl, imgName } = formValues;

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

    useEffect(() => {
        if ( imgEditCuento ) {
            dispatch( setActive({
                ...formValues,
                imgUrl: imgEditCuento
            }) );
        }

    }, [dispatch, imgEditCuento, formValues])

    //FUNCTIONS onClick
    const toggleSidebar = () => { dispatch( toggleShowSidebar() ); }

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
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />

                {
                    ( imgUrl )
                        ?   <img
                                src={ imgUrl }
                                alt={ imgName }
                                className="edit__img img"
                            />
                        :   <p className="font-text"> Imagen no insertada </p>
                }


                <textarea
                    placeholder="Texto del Cuento"
                    className="textarea article-text font-100 color-black"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>
            </div> 

        </main>
    )
}
