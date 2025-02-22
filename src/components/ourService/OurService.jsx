import React from 'react';
import './ourService.css';

const OurService = () => {

    const serviceContent = [
        {id:1, image:'/images/png/traditional-shoot.png', title:'Traditional Photography', content:"Whether you're capturing timeless moments at a wedding or a special family event, our traditional photography services ensure every detail is preserved with elegance and precision."},
        {id:2, image:'/images/png/candidate-shoot.png', title:'Candidate Photography', content:"From spontaneous smiles to heartfelt emotions, our candid photography services capture real, unposed moments, giving you memories that feel alive and authentic."},
        {id:3, image:'/images/png/pre-shoot.png', title:'Pre-Shoot Photography', content:"Whether you're preparing for a wedding, engagement, or personal portfolio, our pre-shoot sessions offer creative and beautifully curated photography to showcase your best self."},
        {id:4, image:'/images/png/outdoor-shoot.png', title:'Outdoor Photography', content:"From scenic landscapes to vibrant city backdrops, our outdoor photography services provide stunning visuals in natural light, perfect for any occasion."},
    ]

    const ServiceCard = ({image, title, content, delay}) => (
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="services-list" data-aos="fade-up" data-aos-delay={delay}>
                <div className="services-list-img">
                    <img src={image} alt=""/>
                </div>
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
        </div>
    )

  return (
    <div>
      <section className="service bg-light section-padding-110-60">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="services-title-content">
                        <div className="section-title">
                            <span>Our services</span>
                            <h2>What We do?</h2>
                            <div className='service-us-title-underline' ></div>
                        </div>
                        <p>If you hire me as your photographer, you will get a skilled professional with <b> 5 years</b> of experience, committed to delivering exceptional photography that tells your story beautifully. With a keen eye for detail and a passion for capturing emotions, I ensure every shot reflects authenticity and creativity.</p>
                        <p>Whether it's a wedding, a candid moment, a pre-shoot, or an outdoor session, I strive to <b>create timeless images</b> that you can cherish forever. Let me bring your vision to life with <b> high-quality photography</b> tailored to your unique needs.</p>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        {serviceContent.map((services, index) => (
                            <ServiceCard key={services.id} {...services} delay={index * 200}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default OurService;
