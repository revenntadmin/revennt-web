import './Footer.css';
import { ImFacebook2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
    return (
        <footer className='footerWholeDiv Saira_Medium_White'>
            {/* <img src={'/logo.png'} /> */}
            <div className="footerContainer">
                <div>
                    <p style={{ fontSize: '22px' }}>Revennt</p>
                    <div className="footerContaincerRow">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/#mission">Mission</a>
                        </li>
                        <li>
                            <a href="/#apps">Applications</a>
                        </li>
                    </div>
                </div>
            </div>
            <div className="copyright">Copyright ©2025 Revennt, LLC</div>
        </footer >
    );
}

export default Footer;
