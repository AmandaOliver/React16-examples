import React from 'react'
import Button from './Button'
import ProduceError from '../../../ContextAPI/src/Components/ProduceError';
export default ({ children }) => (
    <header className='header'>
        <span className='title'>
            {children}
        </span>
        <ProduceError />
        <Button />
    </header>
)
