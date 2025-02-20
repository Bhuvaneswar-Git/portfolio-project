import React from 'react';
import './about.css';
import Breadcrumb  from '../../components/breadcrumb/Breadcrumb.jsx';
import CommonButton from '../../components/commonButton/CommonButton.jsx';
import { IoCamera } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { IoFilmOutline } from "react-icons/io5";


const About = () => {

    const whyChooseUsContent = [
        {id:1, title:'High Quality Image', icon:<IoFilmOutline/>},
        {id:2, title:'Abundant Experience', icon:<FaPencilAlt/>},
        {id:3, title:'Modern Equipments', icon:<IoCamera/>},
    ]

    const WhyChooseUsCard = ({title, icon})=> (
        <div className="col-12 col-lg-4">
            <div className="why-choose-us-content mb-80 text-center position-relative">
                <div className='choose-us-icon'>{icon}</div>
                <h4>{title}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te</p>
            </div>
        </div>
    );

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

      <div className="why-choose-us-area section-padding-80-0 bg-light">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center">
                        <h2>Why Choose Us</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                {whyChooseUsContent.map( content => (
                    <WhyChooseUsCard key={content.id} {...content} />
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default About;
