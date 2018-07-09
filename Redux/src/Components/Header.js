import React from 'react'
import Button from './Button'
export default ({ children }) => (
    <header className='header'>
        <span className='title'>
            {children}
        </span>
        <Button />
    </header>
)
