import React, { useEffect } from 'react';
import './about.css';
import ScrollAd from "../../components/scrollAd/ScrollAd.jsx"
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Breadcrumb  from '../../components/breadcrumb/Breadcrumb.jsx';
import CommonButton from '../../components/commonButton/CommonButton.jsx';
import { IoCamera, IoFilmOutline } from "react-icons/io5";
import { FaPencilAlt, FaYoutube, FaFacebookF, FaInstagram, FaWhatsapp  } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

    const whyChooseUsContent = [
        {id:1, title:'High Quality Image', icon:<IoFilmOutline/>},
        {id:2, title:'Abundant Experience', icon:<FaPencilAlt/>},
        {id:3, title:'Modern Equipments', icon:<IoCamera/>},
    ]

    const WhyChooseUsCard = ({title, icon,delay})=> (
        <div className="col-12 col-lg-4">
            <div className="why-choose-us-content mb-80 text-center position-relative" data-aos="fade-up" data-aos-delay={delay}>
                <div className='choose-us-icon'>{icon}</div>
                <h4>{title}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te</p>
            </div>
        </div>
    );

    const teamMemberContent = [
        {id:1, name:'Bhuvaneswar', src:'/images/jpg/photographer-img-1.jpg'},
        {id:2, name:'Parasuraman', src:'/images/jpg/photographer-img-2.jpg'},
        {id:3, name:'Kovendhan', src:'/images/png/photographer-img-3.png'},
        {id:4, name:'Ansel Adams', src:'/images/jpg/photographer-img-4.jpg'}
    ];

    const TeamMemberCard = ({ name, src, delay})=>(
        <div className="col-md-6 col-xl-3">
            <div className="team-content-area mb-30 text-center" data-aos="fade-up-right" data-aos-delay={delay}>
                <div className="member-thumb">
                    <img src={src} alt="photographer-img" />
                </div>
                <h2>{name}</h2>
                <span>Photographer</span>
                <div className="member-social-info">
                    <a href="#"><FaYoutube/></a>
                    <a href="#"><FaFacebookF/></a>
                    <a href="#"><FaInstagram/></a>
                    <a href="#"><FaWhatsapp/></a>
                </div>
            </div>
        </div>
    );

    useEffect(() => {
          AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once
          easing: "ease-in-out", // Easing type
        });
      }, []);

  return (
    <div>
    <Header/>
        <Breadcrumb pageTitle='About Us' currentPage='About'/>
      <div className='about-us-area section-padding'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                   <div className="about-us-content mb-80" data-aos="fade-up-right">
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

      <div className="why-choose-us-area section-padding-80-0 bg-light App">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center" data-aos="fade-up">
                        <h2>Why Choose Us</h2>
                    </div>
                </div>
            </div>
            <div className="row section-padding-50">
                {whyChooseUsContent.map( (content, index) => (
                    <WhyChooseUsCard key={content.id} {...content} delay={index * 200}/>
                ))}
            </div>
        </div>
      </div>

      <div className="our-team-area section-paddding-80-50">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center" data-aos="fade-up-right">
                        <h2>Our Team</h2>
                    </div>
                </div>
            </div>
            <div className="row">

                {teamMemberContent.map((details, index)=>(
                    <TeamMemberCard 
                    key={details.id} 
                    {...details} 
                    delay={index * 200}/>
                ))}

        
            </div>
        </div>
      </div>
<ScrollAd/>
<Footer/>
    </div>
  )
}

export default About;
