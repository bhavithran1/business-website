import React from 'react'
import { Headings } from '../../components';
import './Contact.css';
import { FaGithub, FaLinkedin, FaSteam } from "react-icons/fa"


const Contact = () => {
  return (
    <div classNameName="section-padding">
      <Headings title="Contact Us" text="Connect with Us: Let's  Discuss Your Portfolio Website Needs" />

      <div className="contact" id="quote">

        <div className="row">
          <div className='col-lg-8 col-12'>
            <h3>Contact Me via Whatsapp</h3>

            <p className="pt-2 pb-4">Message us using the number below today to learn more about how our pricing quote works.</p>
            <buton className="btn-positivus">012-254 5982</buton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact





{/* <form>
              <div class="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label" for="inlineRadio1">Say Hi</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" for="inlineRadio2">Get a Quote</label>
              </div>

              <div className="form-group">
                <label>Name*</label>
                <input className="form-control" type="text" placeholder="Name" />
              </div>
              <div className="form-group">
                <label>Email*</label>
                <input className="form-control" type="email" placeholder="Email" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">    Message*</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" class="btn-positivus w-100">Submit</button>
            </form> */}


