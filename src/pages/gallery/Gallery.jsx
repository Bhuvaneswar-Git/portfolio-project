import React, { useState } from 'react';
import Breadcrumb  from '../../components/breadcrumb/Breadcrumb.jsx';
import CommonButton from '../../components/commonButton/CommonButton.jsx';
import './gallery.css'

const Gallery = ({showBreadcrumb = true}) => {

    const [active, setActive] = useState("All");

    const images = [
        "images/webp/insta-img-1.webp",
        "images/webp/insta-img-2.webp",
        "images/webp/insta-img-3.webp",
        "images/webp/insta-img-4.webp",
        "images/webp/insta-img-5.webp",
        "images/webp/insta-img-6.webp"
    ]

  return (
    <div>
        {showBreadcrumb && <Breadcrumb pageTitle='Gallery' currentPage='Gallery'/>}

        <div className="portfolio-area section-padding-80">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="project-menu">
                            <div className='portfolio-menu text-center'>
                                {['All', 'Human', 'Nature', 'Country', 'Video'].map((item)=>(
                                    <button 
                                        key={item} 
                                        className={`menu-btn ${active === item ? 'active' : ''}`}
                                        onClick={ ()=> setActive(item) }
                                     >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {images.map( (image,index)=> (
                        <div className="col-12 col-sm-6 col-lg-3 mb-30 single-gallery-image"> 
                        <div className="single-portfolio-content">
                            <img src={image} alt={`gallery-img-${index}`} />
                        </div>
                    </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <CommonButton buttonValue='View More' textColor='text-black'  />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Gallery;
