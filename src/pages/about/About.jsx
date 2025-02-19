import React from 'react';
import './about.css';
import Breadcrumb  from '../../components/breadcrumb/Breadcrumb.jsx';
import CommonButton from '../../components/commonButton/CommonButton.jsx';


const About = () => {
  return (
    <>
        <Breadcrumb pageTitle='About Us' currentPage='About'/>
      <div className='about-us-area section-padding'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                   <div className="about-us-content mb-80">
                        <h2 className='about-us-title'>We Live For Passion</h2>
                        <div className='about-us-title-underline' ></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
                            elit, sed do eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo enim ipsam et dolore magnam aliquam quaerat voluptatem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                             sed do eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo enim ipsam et dolore magnam aliquam quaerat voluptatem.</p>
                        <CommonButton buttonValue='Contact Us' textColor='text-black'/>
                   </div>
                </div>
                <div className="col-12 col-lg-6">
                   <div className="about-video-area mb-80">
                        <img src="/images/jpg/about-us-img.jpg" alt="" />
                        <div>
                            <a href=""></a>
                        </div>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default About;
