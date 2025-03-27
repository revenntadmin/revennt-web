import ContactTop from '../Contact/Top/Top';
import HomeBody from './Body/Body';
import './Home.css';
import HomeTop from './Top/Top';

function Home() {
    return (
        <div className='home_top_div Saira_Medium_DGray'>
            <HomeTop />
            <HomeBody />
            <ContactTop contact_page={false} />
        </div>
    );
}

export default Home;
