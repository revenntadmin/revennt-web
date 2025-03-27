import './Donate.css'
import DonateTop from './Top/Top';

function Donate() {
    return (
        <div className='donate_top_div'>
            <DonateTop />

            <div className='donation_margin_div' >
                <p className='donate_page_top_slogan'>Make A Donation</p>
                <p className='event_page_top_slogan_small'>This community has supported NWMI's growth since 2009, and your continued generosity inspires us to do even more.  Help NWMI continue to offer relevant programs for the local American Muslim community by donating today.  May Allah reward your generosity.</p>


                <div className='donate_donate_online_button_div'>
                    <a href='https://www.paypal.com/donate/' target={'_blank'} rel="noreferrer">
                        <p className='Saira_Medium_Gray'>Donate Online</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Donate;
