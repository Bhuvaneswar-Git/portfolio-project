import React from 'react';
import './footer.css';

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
                            <a href=""><i className='ti-github'></i></a>
                            <a href=""><i className='ti-linkedin'></i></a>
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
