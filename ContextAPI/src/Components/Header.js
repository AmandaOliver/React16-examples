import React from 'react'
import Button from './Button'

// We dont need to pass down the logged property needed by Button as Context API stores it.
export default ({ children }) => (
    <header className='header'>
        <span className='title'>
            {children}
        </span>
        <Button/>
    </header>
)
