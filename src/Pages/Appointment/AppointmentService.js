import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
    const { _id, name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body ">
                <div className='mx-auto mb-5'>
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p>{
                        slots.length
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try Another Date</span>
                    }</p>
                    <p>{slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available</p>
                </div>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-secondary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;