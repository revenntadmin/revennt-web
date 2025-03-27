import './Top.css';
import emailjs from 'emailjs-com'

function ContactTop({ contact_page }) {

    function sendEmail(e) {
        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm('service_apg26uw', 'template_xt290ys', e.target, 'JkPb7Ow4fczmWadFK')
            .then((result) => {
                alert("Your message was sent successfully.")
                window.location.reload()
            }, (error) => {
                alert("An error occured.")
                console.log(error.text);
            });
    }

    return (
        <div className='join_us_page_top_banner_div Saira_Medium_Black ' id='contact'>
            <h1 className='contact_header' id={!contact_page && 'other_page_contact_margin'}>Get in touch with us</h1>
            <form action="/submit_inquiry" method="post" className='ConstactUsForm' onSubmit={sendEmail}>
                <div className='contact_form_row_div'>
                    <div className='contact_form_indiv_div'>
                        <input type="text" id="from_first_name" name="from_first_name" required placeholder='First Name' />

                        <input type="text" id="from_last_name" name="from_last_name" required placeholder='Last Name' />
                    </div>
                    <div className='contact_form_indiv_div'>
                        <input type="email" id="from_email" name="from_email" required placeholder='Email Address' />

                        <input type="tel" id="from_phone" name="from_phone" placeholder='Phone Number' />
                    </div>
                    <div className='contact_form_indiv_div'>
                        <textarea id="message" name="message" rows="4" required placeholder='Message'></textarea>
                    </div>
                </div>

                <input type="submit" value="Submit" className='submit_form Saira_Medium_White' />
            </form >
        </div>
    );
}

export default ContactTop;
