import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
import Info from './components/Info/Info';
import Testimonial from './components/Testimonial/Testimonial';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
  
        <Nav />
        <Hero />
        <Service />
        <Info />
        <Testimonial />
        <Work />
        <Footer />

      </div>
    );
  }
}

export default App;
