import React from 'react'
import Filter from './Filter'
import ProductsWrapper from './ProductsWrapper'
import '../css/main.css';
import axios from 'axios'
import StoreItem from './StoreItem'

export default function Main() {


    return (
        // <>
          
                <div className="row m-0 main-pane" id="main-pane">
                       <div className="col-lg-2 col-md-3 side-bar"  id="side-bar">
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
                                    <h6 className="card-title mb-5">Price Filtter</h6>
                                    <form>
                                        <div className="form-group mb-1">
                                            <input type="text" className="form-control input-sm" id="min" placeholder="Min"/>
                                        </div>
                                        <p className="h6 text-center">|</p>
                                        <div className="form-group mt-2">
                                            <input type="text" className="form-control  input-sm" id="max" placeholder="Max"/>
                                        </div>
                                        
                                    </form>
                                    <h6 className="card-title mt-5">Storage</h6>
                                    <ul className="list-group list-group-flush bg-transparent mb-4">
                                        <li className="list-group-item"> 
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                <label className="form-check-label mt-1" for="exampleCheck1">32GB</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item"> 
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                <label className="form-check-label mt-1" for="exampleCheck1">64GB</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item"> 
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                <label className="form-check-label mt-1" for="exampleCheck1">128GB</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item"> 
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                <label className="form-check-label mt-1" for="exampleCheck1">256GB</label>
                                            </div>
                                        </li>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Dropdown button
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                       </div>
                       <div className="col-lg-10 col-md-9 main-panel" id="main-panel">
                        <div className="row m-0">


                                    <div className="col-xl-2 col-lg-3 col-md-3 pt-0 mb-5">
                                        <div className="card product-card" >
                                            <div className="card-body  p-2">
                                            <span className="float-right  pl-2 pr-2 pt-0 pb-0 small border bg-dark product-condition" >A1</span>
                                                <img src="/phones/5C.png" className="img-fluid product-image justify" alt=""/>
                                                <p className=" text-lg-left phone-name mb-0">iPhone 7</p>
                                                <p className="text-lg-left phone-status-storage mb-1">Unlocked | 256GB</p>
                                                <p className=" text-lg-left unit-price-label mb-0">Unit price</p>
                                                <p className=" text-lg-left price mb-0">$450</p>
                                                <p className="small text-lg-left availability-label">1500 Available</p>
                                                <button  className="btn btn-primary btn-sm pl-4 pr-4 mb-3">Buy</button>
                                            </div>
                                        </div>
                                    </div>
                               

                            <div className="col-xl-2 col-lg-3 col-md-3 pt-0  mb-5">
                                <div className="card product-card" >
                                    <div className="card-body  p-2">
                                    <span className="float-right  pl-2 pr-2 pt-0 pb-0 small border bg-dark product-condition" >A1</span>
                                        <img src="/phones/5s.png" className="img-fluid product-image " alt=""/>
                                        <p className=" text-left phone-name mb-0">iPhone 7</p>
                                        <p className="text-left phone-status-storage mb-1">Unlocked | 256GB</p>
                                        <p className=" text-left unit-price-label mb-0">Unit price</p>
                                        <p className=" text-left price mb-0">$450</p>
                                        <p className="small text-left availability-label">1500 Available</p>
                                        <button  className="btn btn-primary btn-sm pl-4 pr-4 mb-3">Buy</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-3 pt-0  mb-5">
                                <div className="card product-card" >
                                    <div className="card-body  p-2">
                                    <span className="float-right  pl-2 pr-2 pt-0 pb-0 small border bg-dark product-condition" >A1</span>
                                        <img src="/phones/5s.png" className="img-fluid product-image " alt=""/>
                                        <p className=" text-left phone-name mb-0">iPhone 7</p>
                                        <p className="text-left phone-status-storage mb-1">Unlocked | 256GB</p>
                                        <p className=" text-left unit-price-label mb-0">Unit price</p>
                                        <p className=" text-left price mb-0">$450</p>
                                        <p className="small text-left availability-label">1500 Available</p>
                                        <button  className="btn btn-primary btn-sm pl-4 pr-4 mb-3">Buy</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-3 pt-0  mb-5">
                                <div className="card product-card" >
                                    <div className="card-body  p-2">
                                    <span className="float-right  pl-2 pr-2 pt-0 pb-0 small border bg-dark product-condition" >A1</span>
                                        <img src="/phones/11-pro.png" className="img-fluid product-image " alt=""/>
                                        <p className=" text-left phone-name mb-0">iPhone 7</p>
                                        <p className="text-left phone-status-storage mb-1">Unlocked | 256GB</p>
                                        <p className=" text-left unit-price-label mb-0">Unit price</p>
                                        <p className=" text-left price mb-0">$450</p>
                                        <p className="small text-left availability-label">1500 Available</p>
                                        <button  className="btn btn-primary btn-sm pl-4 pr-4 mb-3">Buy</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-3 pt-0 mb-5">
                                <div className="card product-card" >
                                    <div className="card-body  p-2">
                                    <span className="float-right  pl-2 pr-2 pt-0 pb-0 small border bg-dark product-condition" >A1</span>
                                        <img src="/phones/11-pro.png" className="img-fluid product-image " alt=""/>
                                        <p className=" text-left phone-name mb-0">iPhone 7</p>
                                        <p className="text-left phone-status-storage mb-1">Unlocked | 256GB</p>
                                        <p className=" text-left unit-price-label mb-0">Unit price</p>
                                        <p className=" text-left price mb-0">$450</p>
                                        <p className="small text-left availability-label">1500 Available</p>
                                        <button  className="btn btn-primary btn-sm pl-4 pr-4 mb-3">Buy</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-3 pt-0 mb-5">
                                <div className="card product-card p-0" >
                                    <div className="card-body  p-2">
                                    <span className="float-right  pl-2 pr-2 pt-0 pb-0 small border bg-dark product-condition" >A1</span>
                                        <img src="/phones/11-pro.png" className="img-fluid product-image " alt=""/>
                                        <p className=" text-left phone-name mb-0">iPhone 7</p>
                                        <p className="text-left phone-status-storage mb-1">Unlocked | 256GB</p>
                                        <p className=" text-left unit-price-label mb-0">Unit price</p>
                                        <p className=" text-left price mb-0">$450</p>
                                        <p className="small text-left availability-label">1500 Available</p>
                                        <button  className="btn btn-primary btn-sm pl-4 pr-4 mb-3">Buy</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-3 pt-0 mb-5">
                                <div className="card product-card mb-3" >
                                    <div className="card-body  p-2">
                                    <span className="float-right  pl-2 pr-2 pt-0 pb-0 small border bg-dark product-condition" >A1</span>
                                        <img src="/phones/11-pro.png" className="img-fluid product-image " alt=""/>
                                        <p className=" text-left phone-name mb-0">iPhone 7</p>
                                        <p className="text-left phone-status-storage mb-1">Unlocked | 256GB</p>
                                        <p className=" text-left unit-price-label mb-0">Unit price</p>
                                        <p className=" text-left price mb-0">$450</p>
                                        <p className="small text-left availability-label">1500 Available</p>
                                        <button  className="btn btn-primary btn-sm pl-4 pr-4 mb-3">Buy</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-3 pt-0 mb-5 mb-5">
                                <div className="card product-card" >
                                    <div className="card-body  p-2">
                                    <span className="float-right  pl-2 pr-2 pt-0 pb-0 small border bg-dark product-condition" >A1</span>
                                        <img src="/phones/11-pro.png" className="img-fluid product-image " alt=""/>
                                        <p className=" text-left phone-name mb-0">iPhone 7</p>
                                        <p className="text-left phone-status-storage mb-1">Unlocked | 256GB</p>
                                        <p className=" text-left unit-price-label mb-0">Unit price</p>
                                        <p className=" text-left price mb-0">$450</p>
                                        <p className="small text-left availability-label">1500 Available</p>
                                        <button  className="btn btn-primary btn-sm pl-4 pr-4 mb-3">Buy</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-3 pt-0 mb-5">
                                <div className="card product-card" >
                                    <div className="card-body  p-2">
                                    <span className="float-right  pl-2 pr-2 pt-0 pb-0 small border bg-dark product-condition" >A1</span>
                                        <img src="/phones/11-pro.png" className="img-fluid product-image " alt=""/>
                                        <p className=" text-left phone-name mb-0">iPhone 7</p>
                                        <p className="text-left phone-status-storage mb-1">Unlocked | 256GB</p>
                                        <p className=" text-left unit-price-label mb-0">Unit price</p>
                                        <p className=" text-left price mb-0">$450</p>
                                        <p className="small text-left availability-label">1500 Available</p>
                                        <button  className="btn btn-primary btn-sm pl-4 pr-4 mb-3">Buy</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-3 pt-0 mb-5">
                                <div className="card product-card" >
                                    <div className="card-body  p-2">
                                    <span className="float-right  pl-2 pr-2 pt-0 pb-0 small border bg-dark product-condition" >A1</span>
                                        <img src="/phones/11-pro.png" className="img-fluid product-image " alt=""/>
                                        <p className=" text-left phone-name mb-0">iPhone 7</p>
                                        <p className="text-left phone-status-storage mb-1">Unlocked | 256GB</p>
                                        <p className=" text-left unit-price-label mb-0">Unit price</p>
                                        <p className=" text-left price mb-0">$450</p>
                                        <p className="small text-left availability-label">1500 Available</p>
                                        <button  className="btn btn-primary btn-sm pl-4 pr-4 mb-3">Buy</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-3 pt-0 mb-5">
                                <div className="card product-card" >
                                    <div className="card-body  p-2">
                                    <span className="float-right  pl-2 pr-2 pt-0 pb-0 small border bg-dark product-condition" >A1</span>
                                        <img src="/phones/11-pro.png" className="img-fluid product-image " alt=""/>
                                        <p className=" text-left phone-name mb-0">iPhone 7</p>
                                        <p className="text-left phone-status-storage mb-1">Unlocked | 256GB</p>
                                        <p className=" text-left unit-price-label mb-0">Unit price</p>
                                        <p className=" text-left price mb-0">$450</p>
                                        <p className="small text-left availability-label">1500 Available</p>
                                        <button  className="btn btn-primary btn-sm pl-4 pr-4 mb-3">Buy</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-3 pt-0 mb-5">
                                <div className="card product-card p-0" >
                                    <div className="card-body  p-2">
                                    <span className="float-right  pl-2 pr-2 pt-0 pb-0 small border bg-dark product-condition" >A1</span>
                                        <img src="/phones/11-pro.png" className="img-fluid product-image " alt=""/>
                                        <p className=" text-left phone-name mb-0">iPhone 7</p>
                                        <p className="text-left phone-status-storage mb-1">Unlocked | 256GB</p>
                                        <p className=" text-left unit-price-label mb-0">Unit price</p>
                                        <p className=" text-left price mb-0">$450</p>
                                        <p className="small text-left availability-label">1500 Available</p>
                                        <button  className="btn btn-primary btn-sm pl-4 pr-4 mb-3">Buy</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-3 pt-0 mb-5">
                                <div className="card product-card mb-3" >
                                    <div className="card-body  p-2">
                                    <span className="float-right  pl-2 pr-2 pt-0 pb-0 small border bg-dark product-condition" >A1</span>
                                        <img src="/phones/11-pro.png" className="img-fluid product-image " alt=""/>
                                        <p className=" text-left phone-name mb-0">iPhone 7</p>
                                        <p className="text-left phone-status-storage mb-1">Unlocked | 256GB</p>
                                        <p className=" text-left unit-price-label mb-0">Unit price</p>
                                        <p className=" text-left price mb-0">$450</p>
                                        <p className="small text-left availability-label">1500 Available</p>
                                        <button  className="btn btn-primary btn-sm pl-4 pr-4 mb-3">Buy</button>
                                    </div>
                                </div>
                            </div>
                            <a className="mobile-filter-button" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <i className="fa fa-ellipsis-v mobile-filter-button-icon"></i>
                            </a>
                        </div>
                       </div>
                    </div>
                   
        // </>
    )
}