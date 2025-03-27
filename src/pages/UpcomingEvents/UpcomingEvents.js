import { useEffect, useState } from 'react';
import './UpcomingEvents.css';
import sanityClient from '../../sanity_config.js'
import { BsCalendar } from 'react-icons/bs'
import { MdOutlineLocationOn } from 'react-icons/md'
import { BiTimeFive } from 'react-icons/bi'
import EventTop from './Top/Top';

function UpcomingEvents() {
    const [events, setEvents] = useState()

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "social_events" && startDateTime >= "${new Date().toISOString()}"]  | order(startDateTime asc) {
                    ...,
                    "imageUrl": mainImage.asset->url
                }`
            )
            .then((data) => setEvents(data))
            .catch(console.error);
    }, [])

    function tConvert(time) {
        const hours = new Date(time).getHours()
        const mins = new Date(time).getMinutes()
        var time = (hours > 12 ? hours - 12 : hours) + ':' + (mins < 10 ? '0' + mins : mins) + ' ' + (hours < 12 ? 'am' : 'pm')
        return time
    }

    return (
        <div className='upcoming_events_top_div Saira_Medium_DGray'>
            <EventTop />

            <div className='upcoming_events_div'>
                <div className='fixed_width'>
                    <p className='upcoming_events_p'>Upcoming Events</p>
                    <div className='upcoming_events_all_div'>
                        {(events && events.length) ? events.map((event, i) => (
                            <div className='upcoming_events_indiv_event_div'>
                                <div className='Saira_Medium_DGray'>
                                    <img src={event.imageUrl} alt="" width={350} height={200} />
                                    <div className='upcoming_events_indiv_event_details'>
                                        <h2>{event.title}</h2>
                                        <p>{new Date(event.startDateTime).toDateString()} - {tConvert(event.startDateTime)} - {event.location}</p>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className='no_upcoming_events'>
                                <p>There are no upcoming events</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpcomingEvents;
