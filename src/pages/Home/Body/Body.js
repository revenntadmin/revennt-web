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
                                    At Revennt, we are dedicated to building innovative, user-centric applications that empower businesses and individuals to achieve more. Our mission is to harness the power of cutting-edge technology to create intuitive, scalable, and secure digital solutions tailored to our clients' unique needs.
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
                            PrepWize is a smart meal-tracking app that provides in-depth analytics on your nutrition, meal costs, and weight projections based on activity level. It breaks down each meal’s calories, protein, fat, potassium, and other key nutrients, helping you understand your diet in detail. With AI-powered insights, the app personalizes recommendations based on your dietary preferences, fitness goals, and health needs.
                            <br />
                            <br />
                            In addition to tracking nutrients, PrepWize calculates the cost of each meal, allowing you to manage your budget while maintaining a balanced diet. Its AI-driven analysis ensures your meals align with your health objectives, whether you’re aiming to lose weight, build muscle, or maintain a healthy lifestyle.
                        </p>
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
