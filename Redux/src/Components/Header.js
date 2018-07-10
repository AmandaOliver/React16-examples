import React from 'react'
import Button from './Button'
import ErrorButton from './ErrorButton';
export default ({ children }) => (
    <header className='header'>
        <span className='title'>
            {children}
        </span>
        <div>
            <ErrorButton />
            <Button />
        </div>
    </header>
)
