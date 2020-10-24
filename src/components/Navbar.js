import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Navbar.css';
// import sideImage from '../src/images/assets/screens-Image.png';


export default class Navbar extends Component {
    render() {
        return (
            <div className="header-container row m-0 p-0">
               
                <nav className="col-12 p-0 mb-4">
                    <div className="row justify-content-center m-0">
                       <div className="col-lg-6 col-md-6">
                        <div className="row m-0">
                            <header className=" col-11 mb-3 mt-2">
                            <p className="text-left h2 text-uppercase font-weight-bold ">Shop our latest available stock here</p>
                            </header>
                            <div className="col-12" >
                            <form>
                                <div className="form-group row">
                                    <div className="col-sm-8 pr-lg-0">
                                        <input type="text" className="form-control small " id="search" placeholder="Enter search term (e.g iphone x, 128Gb or A1)" required></input>
                                    </div>
                                    <div className="col-sm-4 pl-lg-0 ">
                                        <button className="btn btn-outline-white btn-md my-0 ml-sm-2 btnsearch small ml-lg-0" type="submit"> Search <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                       </div>
                       <div className="col-lg-6 col-md-6">
                      
                       </div>
                    </div>
                </nav>
            </div>
        )
    }
}
