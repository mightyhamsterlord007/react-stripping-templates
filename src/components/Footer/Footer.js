import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
        <footer className="footer footer-big footer-color-black" data-color="black">
        <div className="container">
            <div className="row">
                <div className="col-md-2 col-sm-3">
                    <div className="info">
                        <h5 className="title">Company</h5>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Home</a></li>
                                <li>
                                    <a href="#">Find offers</a>
                                </li>
                                <li>
                                    <a href="#">Discover Projects</a>
                                </li>
                                <li>
                                    <a href="#">Our Portfolio</a>
                                </li>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-md-3 col-md-offset-1 col-sm-3">
                    <div className="info">
                        <h5 className="title"> Help and Support</h5>
                         <nav>
                            <ul>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">How it works</a>
                                </li>
                                <li>
                                    <a href="#">Terms &amp; Conditions</a>
                                </li>
                                <li>
                                    <a href="#">Company Policy</a>
                                </li>
                                <li>
                                    <a href="#">Money Back</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3">
                    <div className="info">
                        <h5 className="title">Latest News</h5>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i> <b>Get Shit Done</b> The best kit in the market is here, just give it a try and let us...
                                        <hr className="hr-small" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i> We've just been featured on <b> Awwwards Website</b>! Thank you everybody for...
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-md-2 col-md-offset-1 col-sm-3">
                    <div className="info">
                        <h5 className="title">Follow us on</h5>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#" className="btn btn-social btn-facebook btn-simple">
                                        <i className="fa fa-facebook-square"></i> Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="btn btn-social btn-dribbble btn-simple">
                                        <i className="fa fa-dribbble"></i> Dribbble
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="btn btn-social btn-twitter btn-simple">
                                        <i className="fa fa-twitter"></i> Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="btn btn-social btn-reddit btn-simple">
                                        <i className="fa fa-google-plus-square"></i> Google+
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <hr />

        </div>
    </footer>
    )
  }
}

export default Footer;
