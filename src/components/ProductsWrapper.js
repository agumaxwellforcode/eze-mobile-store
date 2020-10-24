import React, { useState , useEffect } from 'react'



import '../css/products_wrapper.css'

import axios from 'axios'
import StoreItem from './StoreItem'

export default function ProductsWrapper () {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => console.log('mounted'), []);

    async function getProducts() {
        setLoading(true)
        let res;

        try {

            res = await axios.get('http://eze-backend-api.herokuapp.com/api/iphones/sell2') 
            console.log(res)
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
                            name={product.name}
                            condition={product.condition}
                            storage={product.storage}
                            price={product.price}
                            status={product.status}
                            img={product.image}
                        /> 
                        {/* add the necessary props */}
                    </div>
                )
            })}
        </div>
    )
}