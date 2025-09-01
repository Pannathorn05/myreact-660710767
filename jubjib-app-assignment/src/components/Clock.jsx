import React from 'react';

const Clock = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('th-TH');
    const dateString = now.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });
    
    return (
        <div className="clock">
            <h3 style={{
                color: '#3E5F44'
            }} >
                🕐 Thailand 🇹🇭</h3>
            <h4 style={{
                color: '#3E5F44'
            }}
                className="date">{dateString}</h4>
            <h4 style={{
                color: '#3E5F44'
            }}
                className="time">{timeString}</h4>
        </div>
    );
};

export default Clock;