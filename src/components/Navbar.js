import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Navbar.css';


export default class Navbar extends Component {
    render() {
        return (
            <div className="header-container">
               
                <nav>
                    <header className="header-text">
                    <h1>Shop our latest available stock here</h1>
                    </header>
                    <div>
                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}

                        <form className="form-inline ml-auto">
                            <div className="md-form my-0">
                              <input className="form-control" type="text" placeholder="Enter search term (e.g iphone x, 128Gb or A1)" aria-label="Search"></input>
                            </div>
                            <button  className="btn btn-outline-white btn-md my-0 ml-sm-2 btnsearch" type="submit"> Search <span></span> </button>
                        </form>
                       

                        {/* </div> */}
                    </div>
                </nav>
                <img src="" alt=""/>
   
            </div>
        )
    }
}
