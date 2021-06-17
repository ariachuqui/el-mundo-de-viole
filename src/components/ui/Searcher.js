import React from 'react'

export const Searcher = () => {
    return (
        <form className="nav__form container">
            <input 
                className="search" 
                type="text"
                required
                autoComplete = 'off'
                placeholder="Search"
            />
        </form>
    )
}
