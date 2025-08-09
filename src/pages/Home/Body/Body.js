import './Body.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from 'react';

function HomeBody() {

    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element1 = document.getElementById('transition-object-1');
            if (element1) {
                const elementPosition = element1.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < (windowHeight + 150)) {
                    setIsVisible1(true);
                }
            }
            const element2 = document.getElementById('transition-object-2');
            if (element2) {
                const elementPosition = element2.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight) {
                    setIsVisible2(true);
                }
            }
            const element3 = document.getElementById('transition-object-3');
            if (element3) {
                const elementPosition = element3.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight) {
                    setIsVisible3(true);
                }
            }
            const element4 = document.getElementById('transition-object-4');
            if (element4) {
                const elementPosition = element4.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight) {
                    setIsVisible4(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className='home_page_body_top_div'>
            <div className='home_mission_top_div' id='mission'>
                <div>
                    <p className={`home_mission_header home_page_line_and_description_div ${isVisible1 ? 'visible' : ''}`} id='transition-object-1'>Our Mission</p>

                    <div className={`home_page_line_and_description_div ${isVisible2 ? 'visible' : ''}`} id="transition-object-2">
                        <div className='home_mission_img_text_div'>
                            <img src='/mission.webp' className='home_mission_img home_mission_img_text_animation' />

                            <div className='home_mission_img_text_animation'>
                                <p>
                                    Revennt LLC is a technology company driven by a simple goal: create meaningful digital solutions that genuinely improve people’s lives. We believe technology should work for people—not the other way around—so every product we design starts with real-world challenges and ends with tools that are intuitive, accessible, and impactful.
                                    <br />
                                    <br />

                                    Our focus is on AI-powered applications that merge smart technology with exceptional user experience. Whether it’s helping individuals make healthier choices or enabling them to save time and money, our products are built to deliver real value without unnecessary complexity.
                                    <br />
                                    <br />

                                    At Revennt, innovation is not just about being at the cutting edge—it’s about creating technology that makes a difference.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home_events_div' id='apps'>
                <div className='home_events_inner_div'>
                    <div className={`home_mission_img_text_animation home_events_header_text_div ${isVisible3 ? 'visible' : ''}`} id="transition-object-3">
                        <p className='home_events_header'>PrepWize</p>

                        <p className='home_events_text'>
                            PrepWize takes the guesswork out of healthy eating. Using AI, it creates personalized meal plans based on your goals, preferences, and budget. With over 500 dietitian-approved recipes, advanced nutrition tracking, a photo-based food scanner, and real-time guidance, PrepWize helps you eat better, save time, and stay on budget — all in one easy-to-use app.
                        </p>

                        <div className='prepwize_buttons_div'>
                            <a
                                href="https://apps.apple.com/us/app/prepwize-ai-meal-planner/id6744729394"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='prepwize_appstore_button'
                            >
                                <img
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="Download on the App Store"
                                    className='appstore_badge'
                                />
                            </a>

                            <a
                                href="https://prepwize.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='prepwize_landing_button'
                            >
                                Visit PrepWize
                            </a>
                        </div>
                    </div>

                    <div className='home_events_img_carousel_outer_div'>
                        <div className={`home_events_img_carousel_div ${isVisible4 ? 'visible' : ''}`} id="transition-object-4">
                            <img src='/meal_planner.png' className='home_events_img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBody;
