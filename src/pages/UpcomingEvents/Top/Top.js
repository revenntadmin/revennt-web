import './Top.css';

function EventTop() {
    return (
        <div className='event_page_top_banner_div'>
            <div className='event_page_top_img_text_div'>
                <p className='event_page_top_slogan'>Our Programs are aimed to help the youth become spiritually inclined</p>
            </div>

            <div className='event_page_top_img_div'>
                <img src='/bonfire_event.png' className='event_page_top_img' />
            </div>
        </div>
    );
}

export default EventTop;
