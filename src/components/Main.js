import React from 'react'
import Filter from './Filter'
import ProductsWrapper from './ProductsWrapper'
import '../css/main.css';

export default function Main() {
    return (
        // <>
          
                <div className="row m-0 main-panel" id="main-panel">
                       <div className="col-lg-2 col-md-3 side-bar">
                            <div className="card bg-transparent border-0 text-left">
                                <div className="card-body pl-0">
                                    <h6 className="card-title">Categories</h6>
                                    <ul className="list-group list-group-flush bg-transparent mb-4">
                                        <li className="list-group-item">All</li>
                                        <li className="list-group-item">Iphone</li>
                                        <li className="list-group-item">Samsung</li>
                                        <li className="list-group-item">Ipad</li>
                                        <li className="list-group-item">MacBook</li>
                                        <li className="list-group-item">Airpods</li>
                                    </ul>
                                    <h6 className="card-title">Price Filtter</h6>
                                    <form>
                                        <div className="form-group mb-1">
                                            <input type="text" className="form-control input-sm" id="min" placeholder="Min"/>
                                        </div>
                                        <p className="h6 text-center">|</p>
                                        <div className="form-group mt-2">
                                            <input type="text" className="form-control  input-sm" id="max" placeholder="Max"/>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                       </div>
                       <div className="col-lg-9 col-md-6">
                        <div className="row m-0">
                            <div className="col-xl-2 col-lg-3 col-md-3">
                            <div className="card product-card" >
                                <div className="card-body  p-2">
                                <span className="float-right  pl-2 pr-2 pt-0 pb-0 small border bg-dark" >A1</span>
                                    <img src="/phones/11-pro.png" className="img-fluid " alt=""/>
                                    <p className=" text-left phone-name mb-0">iPhone 7</p>
                                    <p className="text-left phone-status-storage mb-1">Unlocked | 256GB</p>
                                    <p className=" text-left unit-price-label mb-0">Unit price</p>
                                    <p className=" text-left price mb-0">$450</p>
                                    <p className="small text-left">1500 Available</p>
                                    <button  className="btn btn-primary btn-sm pl-4 pr-4 mb-3">Buy</button>
                                </div>
                                </div>
                            </div>
                        </div>
                       </div>
                    </div>
        // </>
    )
}