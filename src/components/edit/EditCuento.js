import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { toggleShowSidebar } from '../../action/ui';
import { EditNav } from './EditNav';


export const EditCuento = () => {
    const { showSidebar } = useSelector(state => state.ui)
    const dispatch = useDispatch();


    // const imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
    const imgUrl = null;

    const toggleSidebar = () => {
        dispatch( toggleShowSidebar() );
    }

    return (
        <main className={`edit__cuento height-100 relative ${ showSidebar && 'edit__showsidebar'}`}>
            <i 
                class={`fas fa-chevron-right fa-2x color-white arrow arrow-left ${showSidebar && 'arrow-clicked'}`}
                onClick = { toggleSidebar }
            ></i>

            <EditNav />
            
            <div className="form-2 container">
                <input
                    type="text"
                    placeholder="Titulo"
                    className="input color-d-purple font-title"
                    name="title"
                    // value={title}
                    // onChange={handleInputChange}
                />

                {
                    ( imgUrl )
                        ?   <img
                                src={ imgUrl }
                                // alt={ title }
                                className="edit__img img"
                            />
                        :   <p className="font-text"> Imagen no insertada </p>
                }


                <textarea
                    placeholder="Texto del Cuento"
                    className="textarea article-text font-100 color-black"
                    name="body"
                    // value={body}
                    // onChange={handleInputChange}
                ></textarea>
            </div> 

        </main>
    )
}
