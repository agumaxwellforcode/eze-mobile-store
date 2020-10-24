import React from 'react'

import '../css/store_item.css'

export default function StoreItem(props) {
    return (

            <div  className="col-xl-2 col-lg-3 col-md-3 pt-0 mb-5">
                    <div className="card product-card" >
                        <div className="card-body  p-2">
                        <span className="float-right  pl-2 pr-2 pt-0 pb-0 small border bg-dark product-condition" >${props.condition}</span>
                            <img src={props.image} className="img-fluid product-image justify" alt=""/>
                            <p className=" text-lg-left phone-name mb-0">{props.name}</p>
                            <p className="text-lg-left phone-status-storage mb-1">${props.status} | {props.storage}</p>
                            <p className=" text-lg-left unit-price-label mb-0">Unit price</p>
                            <p className=" text-lg-left price mb-0">${props.price}</p>
                            <p className="small text-lg-left availability-label">1500 Available</p>
                            <button  className="btn btn-primary btn-sm pl-4 pr-4 mb-3">Buy</button>
                        </div>
                    </div>
                </div>


        // <div className='store-item'>
        //     <div className='inner'>

        //         <div className='type-wrapper'>
        //             <p className='phone-type'>{props.type}</p>
        //         </div>
        //         <div className='phone-img-wrapper'>
        //             <img src={props.image} alt='' />
        //         </div>
        //         <div className='description-wrapper'>
        //             <p className='phone-name'>{props.name}</p>
        //             <p>Unlocked|{props.storage}</p>
        //         </div>
        //         <div className='pricing-wrapper'>
        //             <p className='unit-price-text'>Unit price</p>
        //             <p className='price'>${props.price}</p>
        //             <p className='quantity'>{props.quantity} available</p>
        //         </div>
        //         <div className='buy-btn-wrapper'>
        //             <button className='buy-btn'>
        //                 Buy
        //             </button>
        //         </div>

        //     </div>
        // </div>
    )
}