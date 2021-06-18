import React from 'react'
import { useSelector } from 'react-redux'

export const NothingSelected = () => {

    const { activeCrud } = useSelector( state => state.ui );

    return (

        <div className="edit__nothing-container">
            
            <div className="edit__nothing-content">
                <p>Selecciona un { activeCrud } 
                    <br />
                    o crea uno nuevo
                </p>
                <i className="far fa-star fa-4x mt-5"></i>
            </div>

        </div>
    )
}