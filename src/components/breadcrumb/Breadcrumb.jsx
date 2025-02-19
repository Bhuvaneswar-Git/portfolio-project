import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import './breadcrumb.css';

const Breadcrumb = ({pageTitle,currentPage}) => {
  return (
    <div>
      <section className='breadcrum-area bg-top-img' style={{backgroundImage: 'url(/images/jpg/bg-img-3.jpg)'}}>
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <div className="breadcrum-content text-center">
                        <h2 className='page-title'>{pageTitle}</h2>
                        <nav className='breadcrum'>
                            <ol className='breadcrum-link p-0'>
                                <li className='breadcrum-item px-3'>
                                    <a href="#">
                                    <IoHomeOutline />
                                        Home
                                    </a>
                                </li>
                                <li className='breadcrum-item current-page active'>{currentPage}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>    
      </section>
      <div className='bg-overlay-img-top'></div>
    </div>
  )
}

export default Breadcrumb;
