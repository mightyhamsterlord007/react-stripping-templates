import React, { Component } from 'react';

class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-default navbar-transparent navbar-fixed-top" color-on-scroll="200">
            <div className="container">
                <div className="navbar-header">
                    <button id="menu-toggle" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar bar1"></span>
                        <span className="icon-bar bar2"></span>
                        <span className="icon-bar bar3"></span>
                    </button>
                    <a href="http://www.creative-tim.com" className="navbar-brand">
                        Gaia - Free Demo
                    </a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right navbar-uppercase">
                        <li>
                            <a href="http://www.creative-tim.com/product/gaia-bootstrap-template-pro" target="_blank">Get PRO Version</a>
                        </li>
                        <li className="dropdown">
                            <a href="#gaia" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-share-alt"></i> Share
                            </a>
                            <ul className="dropdown-menu dropdown-danger">
                                <li>
                                    <a href="#"><i className="fa fa-facebook-square"></i> Facebook</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter"></i> Twitter</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-instagram"></i> Instagram</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="http://www.creative-tim.com/product/gaia-bootstrap-template" className="btn btn-danger btn-fill">Free Download</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }

}

export default Nav;