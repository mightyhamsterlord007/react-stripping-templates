import React, { Component } from 'react';

class Hero extends Component {

    render() {
        return (
            <div className="section section-header">
            <div className="parallax filter filter-color-red">
                <div className="image">
                </div>
                <div className="container">
                    <div className="content">
                        <div className="title-area">
                            <p>Free Demo</p>
                            <h1 className="title-modern">Gaia</h1>
                            <h3>Probably the most stylish bootstrap template in the world!</h3>
                            <div className="separator line-separator">♦</div>
                        </div>
    
                        <div className="button-get-started">
                            <a href="http://www.creative-tim.com/product/gaia-bootstrap-template" target="_blank" className="btn btn-white btn-fill btn-lg ">
                                Download Demo
                            </a>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
        )
    }

}

export default Hero;