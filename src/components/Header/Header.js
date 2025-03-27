import React from 'react';
import './Header.css'
import { VscMenu } from 'react-icons/vsc'
import { AiOutlineClose } from "react-icons/ai";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import axios from "axios";

class Navbarx extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sixthDiv: window.innerWidth < 1200 ? 'visible' : 'hidden',
            openMobileMenu: false
        };
        this.nav_menu_handler = this.nav_menu_handler.bind(this);
    }


    nav_menu_handler() {
        this.setState({ openMobileMenu: !this.state.openMobileMenu })
        // Your logic for handling the menu click
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({
            sixthDiv: window.innerWidth < 1200 ? 'visible' : 'hidden'
        });
    }


    async componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }


    render() {
        return (
            <>
                <div className="nav_body Saira_Medium_White">
                    <div className="nav_nav_div_top_1">
                        <a href="/">
                            <div className="nav_img">
                                <img src={'/logo.png'} alt="IDCA Logo" />
                            </div>
                        </a>
                        {this.state.sixthDiv === 'hidden' ? (
                            <div>
                                <ul className="nav_menu">
                                    <li>
                                        <a href="/#home">Home</a>
                                    </li>
                                    <li>
                                        <a href="/#mission">Mission</a>
                                    </li>
                                    <li>
                                        <a href="/#apps">Applications</a>
                                    </li>
                                </ul>
                            </div>) : null}

                        {this.state.sixthDiv === 'hidden' ? (
                            <div className='header_donate'>
                                <a href="/#contact">
                                    <p className='header_donate_p'>Contact Us</p>
                                </a>
                            </div>
                        ) : (
                            !this.state.openMobileMenu ? (
                                <div id="navBar_image_menu" className={this.state.sixthDiv} onClick={this.nav_menu_handler}>
                                    <VscMenu className='navBar_image_menu_icon' size={22} />
                                </div>
                            ) : null
                        )}
                    </div>
                </div>
                {
                    this.state.openMobileMenu && this.state.sixthDiv !== 'hidden' ? (
                        <div className='mobile_nav_menu'>
                            <div id="navBar_image_menu" className={this.state.sixthDiv} onClick={this.nav_menu_handler}>
                                <AiOutlineClose className='navBar_image_menu_icon' size={22} />
                            </div>

                            <ul className="mobile_nav_menu_ul">
                                <li>
                                    <a href="/#home">Home</a>
                                </li>
                                <li>
                                    <a href="/#mission">Mission</a>
                                </li>
                                <li>
                                    <a href="/#apps">Applications</a>
                                </li>
                            </ul>

                            <div className='mobile_header_donate_div'>
                                <a href="/#contact">
                                    <p className='mobile_header_donate_p'>Contact Us</p>
                                </a>
                            </div>
                        </div>
                    ) : null
                }

                <Outlet />
                <Footer />
            </>
        )
    }
}

export default Navbarx; 