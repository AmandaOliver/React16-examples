import React from 'react'
import Button from './Button'
import ProduceError from './ProduceError'
// We dont need to pass down the logged property needed by Button as Context API stores it.
export default ({ children }) => (
    <header className='header'>
        <span className='title'>
            {children}
        </span>
        <ProduceError />
        <Button/>
    </header>
)
