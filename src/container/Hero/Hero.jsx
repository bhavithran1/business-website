import React from 'react';
import { images } from '../../constants';
import './Hero.css';


const logos = ["logo01", "logo02", "logo03", "logo04", "logo05", "logo06"];

const Hero = () => {

  return (
    <div className="hero">
      <div id="body-div" className="row align-items-center">
        <div className="col-md-6 col-12">
          <h1 className="title"> Building portfolio websites for your success </h1>
          <p className="py-4">Specializing in designing and developing portfolio websites for individuals, small teams, and companies. These websites serve as a platform to showcase their work, projects, and capabilities.</p>
          <button className="btn-positivus">Book a consultation</button>
        </div>
        <div className="col-md-6 col-12 mt-md-0 mt-4">
          <img className="img-fluid" src={images.hero} alt="design" />
        </div>
      </div>
    </div>
  )
}

export default Hero
