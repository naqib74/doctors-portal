import React from 'react';

const AppointmentsByDate = ({appointments}) => {
    return (
        <div>
            <h2>Appointment:{appointments.length}</h2>
            {
                appointments.map(app =><li>{app.name}</li>)
            }
        </div>
    );
};

export default AppointmentsByDate;