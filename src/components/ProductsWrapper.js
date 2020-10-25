import React, { useState } from 'react'

import '../css/products_wrapper.css'

import axios from 'axios'
import StoreItem from './StoreItem'

export default function ProductsWrapper () {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    async function getProducts() {
        setLoading(true)
        let res;

        try {

            res = await axios.get('/url-endpoint-to-get-products-data', {withCredentials: true}) //withCredentials is set to true in case you're using cookies, else you can remove it
            setLoading(false)
            setProducts(res.data) // might be res.data.phones or whatever, depending on the structure of the data returned from the api.

        } catch (error) {

            setLoading(false)
            console.log(error)

        }
    }

    return (
        <div className='products-wrapper'>
            {products.map((product, index) => {
                return (
                    <div key={index} className='product-item'>
                        <StoreItem 
                            type={product.type}
                            name={product.name}
                            unlocked={product.storage}
                            amount={product.price}
                            available={product.available}
                            qty={product.quantity}
                            img={product.image}
                        /> 
                        {/* add the necessary props */}
                    </div>
                )
            })}
        </div>
    )
}