import React from 'react'

import '../css/store_item.css'

export default function StoreItem(props) {
    return (
        <div className='store-item'>
            <div className='inner'>

                <div className='type-wrapper'>
                    <p className='phone-type'>{props.type}</p>
                </div>
                <div className='phone-img-wrapper'>
                    <img src={props.image} alt='' />
                </div>
                <div className='description-wrapper'>
                    <p className='phone-name'>{props.name}</p>
                    <p>Unlocked|{props.storage}</p>
                </div>
                <div className='pricing-wrapper'>
                    <p className='unit-price-text'>Unit price</p>
                    <p className='price'>${props.price}</p>
                    <p className='quantity'>{props.quantity} available</p>
                </div>
                <div className='buy-btn-wrapper'>
                    <button className='buy-btn'>
                        Buy
                    </button>
                </div>

            </div>
        </div>
    )
}