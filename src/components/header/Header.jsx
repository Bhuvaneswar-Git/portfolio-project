import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import { CiSearch } from "react-icons/ci";

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=> {
            if(window.scrollY > 50){
                setIsSticky(true);
            }else{
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll)

        // cleanup the event
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    },[]);

    const navLinks = ['home', 'about', 'gallery', 'blog', 'contact']
    
    return (
        <header className='header-area'>
            <div className={`main-header-area ${isSticky? 'sticky' : ''}`} > 
                <div className="container">
                    <nav className='nav-bar-content justify-content-around'>
                        <a href="/">Bhuvaneswar</a>
                        <div className="navbar">
                            <div className="classynav">
                                <ul className='link-redirect'>  
                                {navLinks.map((link)=>(
                                        <li key={link}>
                                            <NavLink to={`/${link}`} className={({ isActive }) => (isActive ? 'active' : '')}>
                                                {link.charAt(0).toUpperCase() + link.slice(1)}
                                            </NavLink>
                                        </li>
                                ))}
                                </ul>
                                <div className='search-icon'>
                                    <CiSearch />
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
        </div> 
        </header>
  )
}

export default Header;
