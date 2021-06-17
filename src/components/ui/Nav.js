import React, { useState } from 'react';

export const Nav = () => {

    const [cuentosIsSelected, setCuentosIsSelected] = useState(true)

    const handleScreen = () => {
        cuentosIsSelected
        ? setCuentosIsSelected(false)
        : setCuentosIsSelected(true)
    }

    return (
        <nav className="flex-between relative">
            <div 
                className={`nav__option ${cuentosIsSelected && 'selected'} text-center`}
                onClick={handleScreen}
            >
                <h2 
                    className={`font-200 ${cuentosIsSelected &&'color-d-purple'}`}
                > 
                    Los cuentos de Viole 
                </h2>
            </div>

            <div 
                className={`nav__option ${!cuentosIsSelected && 'selected'} text-center`}
                onClick={handleScreen}
            >
                <h2 
                    className={`font-200 ${!cuentosIsSelected &&'color-d-purple'}`}
                > 
                    Los dibujos de Viole 
                </h2>
            </div>

            <div className={`nav__line ${!cuentosIsSelected && 'nav__line-right'} absolute`}></div>
        </nav>
    )
}
