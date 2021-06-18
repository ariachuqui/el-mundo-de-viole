import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {

    const [cuentosIsSelected, setCuentosIsSelected] = useState(true)
    const handleScreen = () => {
        cuentosIsSelected
        ? setCuentosIsSelected(false)
        : setCuentosIsSelected(true)
    }

    return (
        <nav className="flex-between relative">
            <Link 
                to='/' 
                className={`nav__option ${cuentosIsSelected && 'selected'} text-center`}
                onClick={handleScreen}
            >
                    <h2 
                        className={`font-200 ${cuentosIsSelected &&'color-d-purple'}`}
                    > 
                        Los cuentos de Viole 
                    </h2>
            </Link>

            <Link 
                to="/dibujos"
                className={`nav__option ${!cuentosIsSelected && 'selected'} text-center`}
                onClick={handleScreen}
            >
                    <h2 
                        className={`font-200 ${!cuentosIsSelected &&'color-d-purple'}`}
                    > 
                        Los dibujos de Viole 
                    </h2>
            </Link>

            <div className={`nav__line ${!cuentosIsSelected && 'nav__line-right'} absolute`}></div>
        </nav>
    )
}
