import React, { useState } from 'react';
import Breadcrumb  from '../../components/breadcrumb/Breadcrumb.jsx';
import CommonButton from '../../components/commonButton/CommonButton.jsx';
import './gallery.css'

const Gallery = () => {

    const [active, setActive] = useState("All");

  return (
    <div>
        <Breadcrumb pageTitle='Gallery' currentPage='Gallery'/>

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

                                {/* <button className='btn menu-btn' >All</button>
                                <button className='btn menu-btn'>Human</button>
                                <button className='btn menu-btn'>Nature</button>
                                <button className='btn menu-btn'>Country</button>
                                <button className='btn menu-btn'>Video</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row"></div>
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
