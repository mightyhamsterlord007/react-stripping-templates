import React, { Component } from 'react'

class Testimonial extends Component {
  render() {
    return (
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

    )
  }
}

export default Testimonial;