import React from 'react'
import Filter from './Filter'
import ProductsWrapper from './ProductsWrapper'

export default function Main() {
    return (
        <>
            <div className='main-wrapper'>
                <div className='content-left'>
                    <Filter />
                </div>
                <div className='content-right'>
                    <ProductsWrapper />
                </div>
            </div>
        </>
    )
}