import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
const headerImg = "../../../images/bjb-contactheader.png"

function ContactUs() {
  return (
    <div className='contact-us'>
    <div className='content-header'>
         <div className="header-overlay"></div>
            <StaticImage src={headerImg} quality={60} formats={["auto", "webp", "avif"]} />
            <div className='header-cont'>
                <h1>Contact Us</h1>
         </div>
      </div>
      <div className='contact-main'>
        <div className='contact-cont'>
            <div className='row'>
                <div className='col-sm-6'>
                <h1>Contact Belize Jungle Boys</h1>
                <p>Ready to plan your adventure in Belize? Get in touch with us at Belize Jungle Boys! Whether you’re looking to explore ancient caves, zip through the jungle, or enjoy a custom tour tailored to your schedule, we’re here to help make it happen. Reach out today!</p>
                <p>Email: <a href="mailto:belizejungleboystour@gmail.com"> belizejungleboystour@gmail.com</a></p>
                <p>Phone:<a href="tel:5016678300"> +(501) 667-8300</a></p>
                <p>Whatsapp:<a href="https://wa.me/message/QZUQXTUFSFGBH1"> Click to Chat on Whatsapp</a></p>
                <p>Directions Here: <a href="https://maps.app.goo.gl/SbKReuyyWgv2oPYN8"> Click for Directions</a></p>
                
                </div>
                <div className='col-sm-6'>
                <div class="elfsight-app-082652c6-52a3-45c6-a52f-27e6d8570fc1" data-elfsight-app-lazy></div>
                         
                 </div>
            </div>
            </div>
   
      </div>
    </div>
  )
}

export default ContactUs
