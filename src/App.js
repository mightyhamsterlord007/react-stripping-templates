import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
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


    <div className="section">
        <div className="container">
            <div className="row">
                <div className="title-area">
                    <h2>Our Services</h2>
                    <div className="separator separator-danger">✻</div>
                    <p className="description">We promise you a new look and more importantly, a new attitude. We build that by getting to know you, your needs and creating the best looking clothes.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon text-danger">
                            <i className="pe-7s-graph1"></i>
                        </div>
                        <h3>Sales</h3>
                        <p className="description">We make our design perfect for you. Our adjustment turn our clothes into your clothes.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon text-danger">
                            <i className="pe-7s-note2"></i>
                        </div>
                        <h3>Content</h3>
                        <p className="description">We create a persona regarding the multiple wardrobe accessories that we provide..</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon text-danger">
                            <i className="pe-7s-music"></i>
                        </div>
                        <h3>Music</h3>
                        <p className="description">We like to present the world with our work, so we make sure we spread the word regarding our clothes.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="section section-our-team-freebie">
        <div className="parallax filter filter-color-black">
            <div className="image">
            </div>
            <div className="container">
                <div className="content">
                    <div className="row">
                        <div className="title-area">
                            <h2>Who We Are</h2>
                            <div className="separator separator-danger">✻</div>
                            <p className="description">We promise you a new look and more importantly, a new attitude. We build that by getting to know you, your needs and creating the best looking clothes.</p>
                        </div>
                    </div>

                    <div className="team">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card card-member">
                                            <div className="content">
                                                <div className="avatar avatar-danger">
                                                    <img alt="..." className="img-circle" src="assets/img/faces/face_1.jpg"/>
                                                </div>
                                                <div className="description">
                                                    <h3 className="title">Tina</h3>
                                                    <p className="small-text">CEO / Co-Founder</p>
                                                    <p className="description">I miss the old Kanye I gotta say at that time I’d like to meet Kanye And I promise the power is in the people and I will use the power given by the people to bring everything I have back to the people.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card card-member">
                                            <div className="content">
                                                <div className="avatar avatar-danger">
                                                    <img alt="..." className="img-circle" src="assets/img/faces/face_4.jpg"/>
                                                </div>
                                                <div className="description">
                                                    <h3 className="title">Andrew</h3>
                                                    <p className="small-text">Product Designer</p>
                                                    <p className="description">I miss the old Kanye I gotta say at that time I’d like to meet Kanye And I promise the power is in the people and I will use the power given by the people to bring everything I have back to the people.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card card-member">
                                            <div className="content">
                                                <div className="avatar avatar-danger">
                                                    <img alt="..." className="img-circle" src="assets/img/faces/face_3.jpg"/>
                                                </div>
                                                <div className="description">
                                                    <h3 className="title">Michelle</h3>
                                                    <p className="small-text">Marketing Hacker</p>
                                                    <p className="description">I miss the old Kanye I gotta say at that time I’d like to meet Kanye And I promise the power is in the people and I will use the power given by the people to bring everything I have back to the people.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="section section-our-clients-freebie">
        <div className="container">
            <div className="title-area">
                <h5 className="subtitle text-gray">Here are some</h5>
                <h2>Clients Testimonials</h2>
                <div className="separator separator-danger">∎</div>
            </div>

            <ul className="nav nav-text" role="tablist">
                <li className="active">
                    <a href="#testimonial1" role="tab" data-toggle="tab">
                        <div className="image-clients">
                            <img alt="..." className="img-circle" src="assets/img/faces/face_5.jpg"/>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#testimonial2" role="tab" data-toggle="tab">
                        <div className="image-clients">
                            <img alt="..." className="img-circle" src="assets/img/faces/face_6.jpg"/>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#testimonial3" role="tab" data-toggle="tab">
                        <div className="image-clients">
                            <img alt="..." className="img-circle" src="assets/img/faces/face_2.jpg"/>
                        </div>
                    </a>
                </li>
            </ul>


            <div className="tab-content">
                <div className="tab-pane active" id="testimonial1">
                    <p className="description">
                        And I used a period because contrary to popular belief I strongly dislike exclamation points! We no longer have to be scared of the truth feels good to be home In Roman times the artist would contemplate proportions and colors. Now there is only one important color... Green I even had the pink polo I thought I was Kanye I promise I will never let the people down. I want a better life for all!
                    </p>
                </div>
                <div className="tab-pane" id="testimonial2">
                    <p className="description">Green I even had the pink polo I thought I was Kanye I promise I will never let the people down. I want a better life for all! And I used a period because contrary to popular belief I strongly dislike exclamation points! We no longer have to be scared of the truth feels good to be home In Roman times the artist would contemplate proportions and colors. Now there is only one important color...
                    </p>
                </div>
                <div className="tab-pane" id="testimonial3">
                    <p className="description"> I used a period because contrary to popular belief I strongly dislike exclamation points! We no longer have to be scared of the truth feels good to be home In Roman times the artist would contemplate proportions and colors. The 'Gaia' team did a great work while we were collaborating. They provided a vision that was in deep connection with our needs and helped us achieve our goals.
                    </p>
                </div>

            </div>

        </div>
    </div>


    <div className="section section-small section-get-started">
        <div className="parallax filter">
            <div className="image">
            </div>
            <div className="container">
                <div className="title-area">
                    <h2 className="text-white">Do you want to work with us?</h2>
                    <div className="separator line-separator">♦</div>
                    <p className="description"> We are keen on creating a second skin for anyone with a sense of style! We design our clothes having our customers in mind and we never disappoint!</p>
                </div>

                <div className="button-get-started">
                    <a href="#gaia" className="btn btn-danger btn-fill btn-lg">Contact Us</a>
                </div>
            </div>
        </div>
    </div>


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

      </div>
    );
  }
}

export default App;
