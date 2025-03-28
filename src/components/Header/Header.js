import React, { useState, useEffect } from 'react';
import './Header.css';
import { VscMenu } from 'react-icons/vsc';
import { AiOutlineClose } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';

const Header = () => {
    const [sixthDiv, setSixthDiv] = useState('hidden');
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setSixthDiv(window.innerWidth < 1200 ? 'visible' : 'hidden');
        };

        handleResize(); // Ensure state is accurate on mount
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navMenuHandler = () => {
        setOpenMobileMenu((prev) => !prev);
    };

    return (
        <>
            <div className="nav_body Saira_Medium_White">
                <div className="nav_nav_div_top_1">
                    <Link to="/">
                        <div className="nav_img">
                            <img src={'/logo.png'} alt="IDCA Logo" />
                        </div>
                    </Link>
                    {sixthDiv === 'hidden' ? (
                        <div>
                            <ul className="nav_menu">
                                <li><a href="/#home">Home</a></li>
                                <li><a href="/#mission">Mission</a></li>
                                <li><a href="/#apps">Applications</a></li>
                            </ul>
                        </div>
                    ) : null}

                    {sixthDiv === 'hidden' ? (
                        <div className='header_donate'>
                            <a href="/#contact">
                                <p className='header_donate_p'>Contact Us</p>
                            </a>
                        </div>
                    ) : (
                        !openMobileMenu && (
                            <div id="navBar_image_menu" className={sixthDiv} onClick={navMenuHandler}>
                                <VscMenu className='navBar_image_menu_icon' size={22} />
                            </div>
                        )
                    )}
                </div>
            </div>

            {openMobileMenu && sixthDiv !== 'hidden' && (
                <div className='mobile_nav_menu'>
                    <div id="navBar_image_menu" className={sixthDiv} onClick={navMenuHandler}>
                        <AiOutlineClose className='navBar_image_menu_icon' size={22} />
                    </div>

                    <ul className="mobile_nav_menu_ul">
                        <li><a href="/#home">Home</a></li>
                        <li><a href="/#mission">Mission</a></li>
                        <li><a href="/#apps">Applications</a></li>
                    </ul>

                    <div className='mobile_header_donate_div'>
                        <a href="/#contact">
                            <p className='mobile_header_donate_p'>Contact Us</p>
                        </a>
                    </div>
                </div>
            )}
            <Outlet />

            <Footer />
        </>
    );
};

export default Header;
