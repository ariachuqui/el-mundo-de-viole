import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startLogin } from '../../action/auth';

import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const { alerError } = useSelector(state => state.ui)
    const dispatch = useDispatch();

    const [ {name, password}, handleInputChange ] = useForm({
        name: '',
        password: ''
    });

    const handleSubmit = ( e ) => {
        e.preventDefault();
        dispatch( startLogin(name, password) );
    }

    return (
        <main className="auth">
            <div className="auth__form-container">
                <form 
                    className="form-1"
                    onSubmit={ handleSubmit }
                >
                    {
                        alerError && 
                        <div>
                            <p className="alert-error"> El usuario o la contraseña son incorrectos </p>
                        </div>
                    }

                    <div className="input-container relative">
                        <input 
                            className="input absolute" 
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={ handleInputChange } 
                            required
                            autoComplete = 'off'
                        />
    
                        <label 
                            className="label absolute" 
                            htmlFor="name"
                        >
                            Nombre
                        </label>
    
                        <span className="form__line absolute"></span>
                    </div>
    
                    <div className="input-container relative">
                        <input 
                            className="input absolute" 
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={ handleInputChange } 
                            required
                            autoComplete = 'off'
                        />
    
                        <label 
                            className="label absolute" 
                            htmlFor="password"
                        >
                            Contraseña
                        </label>
    
                        <span className="form__line absolute"></span>
                    </div>
               
                    <button 
                        className="btn btn-1"
                        type="submit"
                    > Login </button>
                </form>
            </div>
        </main>
    )
}
