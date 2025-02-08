import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'

const Calendars = () => {

    const localizer = momentLocalizer(moment)

    const [allEvents, setAllEvents] = useState([
        {
            id: 0,
            title: 'Meeting with Dr. Smith',
            start: new Date(2024, 1, 25, 10, 0), // Feb 25, 2024 at 10:00 AM
            end: new Date(2024, 1, 25, 11, 0),   // Feb 25, 2024 at 11:00 AM
            patient: 'John Doe'
        },
        {
            id: 1,
            title: 'Dental Checkup: Sarah',
            start: new Date(2024, 1, 26, 14, 0), // Feb 26, 2024 at 2:00 PM
            end: new Date(2024, 1, 26, 15, 0),   // Feb 26, 2024 at 3:00 PM
            patient: 'Sarah Connor'
        },
        // Add more events as needed
    ]);

    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const addAppointment = (newEvent) => {
        setAllEvents([...allEvents, newEvent]);
    };

    const deleteAppointment = (eventId) => {
        setAllEvents(allEvents.filter(event => event.id !== eventId));
    };

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    const handleSelectSlot = ({ start, end }) => {
        const title = window.prompt('New Event name');
        if (title) {
            addAppointment({ title, start, end });
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedEvent(null);
    };

    return (
        <Layout>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='title-wrapper'>
                        <h4>Calendar</h4>
                        <p>Here are all our appointments scheduled by your patients list - you can also add tasks and events as you require by pressing on the 'Add' button</p>
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='widget-content table-responsive'>
                        <Calendar
                            localizer={localizer}
                            events={allEvents}
                            startAccessor="start"
                            endAccessor="end"
                            onSelectEvent={handleSelectEvent}
                            onSelectSlot={handleSelectSlot}
                            selectable
                            style={{ height: 500, opacity: showModal ? 0.2 : 1 }}
                            className='mt-4'
                        />
                    </div>
                </div>
            </div>
            {showModal && (<>
                <Modal event={selectedEvent} closeModal={closeModal} deleteAppointment={deleteAppointment} />
                <div className='modal-dropshadow'></div>
            </>
            )}
        </Layout>
    )
}

const Modal = ({ event, closeModal, deleteAppointment }) => {
    const handleDelete = () => {
        deleteAppointment(event.id);
        closeModal();
    };
    return (
        <div className='event-delete-modal text-center'>
            <h4>Appointment Details</h4>
            <div>
                <p>{event.title} Details...</p>
            </div>
            <button onClick={handleDelete} className="theme-btn mt-3 btn btn-danger w-100">
                Delete Appointment
            </button>
            <button id="ok-btn" onClick={closeModal} className="theme-btn mt-3 btn btn-primary w-100">
                Close
            </button>
        </div>
    );
};

export default Calendars