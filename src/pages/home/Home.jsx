import React from 'react';
import './home.css';
import CommonButton from '../../components/commonButton/CommonButton';
import Gallery from '../gallery/Gallery';
import Header from '../../components/header/Header.jsx';


const Home = () => {
  return (
    <div>
    <Header/>
      <section className='welcome-area'>
        <div className="welcome-slider">
            <div className="owl-stage-outer">
                <div className="owl-item">
                    <div className="single-welcome-slider bg-overlay" style={{backgroundImage: 'url(/images/jpg/bg-img-3.jpg)'}}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 col-lg-8 col-xl-7">
                                    <div className="welcome-text">
                                        <h2>Hello <br /> I'm Bhuvaneswar</h2>
                                        <p className="text-white">My photography is guided by instinct, embracing the raw essence of each moment rather than adhering to rules or trends.</p>
                                        <div>
                                            <CommonButton buttonValue='Example Btn'/>
                                            <a className="hero-email" href="mailto:bhuvaneswar00ks10@gmail.com">Bhuvaneswar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Gallery showBreadcrumb={false}/>
    </div>
  )
}

export default Home;
