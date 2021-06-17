import React from 'react';
import { Link } from "react-router-dom";

export const LoginScreen = () => {
    return (
        <main className="auth">
            <div className="auth__form-container">
                <form action="#" className="form">
                    <div className="input-container relative">
                        <input 
                            className="input absolute" 
                            type="text"
                            id="name" 
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
                </form>
            </div>
        </main>
    )
}
