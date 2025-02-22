import React from 'react'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import './contact.css';
import ScrollAd from '../../components/scrollAd/ScrollAd.jsx';
import Footer from '../../components/footer/Footer.jsx'

const Contact = () => {
  return (
    <div>
      <Breadcrumb pageTitle='Contact' currentPage='Contact'/>
      <section className='contact-area contact-padding' >
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h2 className='contact-title'>Let's Work <br /> Together</h2>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="contact-info mb-30">
                            <p>Email</p>
                            <a href="mailto:bhuvaneswar00ks10@gmail.com">example@gmail.com</a>
                        </div>
                        <div className="contact-info mb-30">
                            <p>Call Me</p>
                            <a href="#">+91 987654321</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="contact-info mb-30">
                            <p>Visit Us</p>
                            <a href="#">No.01 ABC Road <br />Puducherry <br />India</a>
                        </div>
                    </div>
                </div>
            </div>
      </section>
      <section className='contact-map section-padding-0-80' >
            <div className="container">
                <div id='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62456.14392245284!2d79.77199360885908!3d11.939220051890727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e49cfcf%3A0xcc6bd326d2f0b04e!2sPuducherry!5e0!3m2!1sen!2sin!4v1739948010283!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
      </section>
    <ScrollAd/>
    <Footer/>
    </div>
  )
}

export default Contact;
