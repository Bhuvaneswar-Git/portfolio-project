import React from 'react';
import './footer.css';
import {FaYoutube, FaFacebookF, FaInstagram, FaWhatsapp  } from 'react-icons/fa';


const footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <div className="footer-content d-flex align-items-center justify-content-between">
                        <div className="copywrite-text">
                            <p>Copyright © 2025 All rights reserved | This template is made by Bhuvaneswar
                            </p>
                        </div>
                        <div className="logo">
                          <a href="">Bhuvaneswar</a>
                          </div>
                        <div className="social-info">
                          <a href="#"><FaYoutube/></a>
                          <a href="#"><FaFacebookF/></a>
                          <a href="#"><FaInstagram/></a>
                          <a href="#"><FaWhatsapp/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default footer;
