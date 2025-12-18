import React from 'react';
import './EventDetails.css';

const EventDetails = ({ event, onBack }) => {
  return (
    <div className="event-details">
      <button className="back-btn" onClick={onBack}>Back to Events</button>
      <h3>{event.name}</h3>
      <p><strong>Start Date:</strong> {event.startDate}</p>
      <p><strong>Start Time:</strong> {event.startTime}</p>
      <p><strong>Duration:</strong> {event.duration} hours</p>
      <p><strong>Participants:</strong> {event.participants}</p>
      <p><strong>Status:</strong> {event.status}</p>

      <h4>Event Photos</h4>
      <div className="event-photos-grid">
        {event.photos.map((photo, index) => (
          <div key={index} className="event-photo-card">
            <img src={photo} alt={`${event.name} photo ${index + 1}`} className="event-photo" />
          </div>
        ))}
      </div>

      <div className="event-actions">
        <button className="edit-btn">Edit Event</button>
        <button className="delete-btn">Delete Event</button>
      </div>
    </div>
  );
};

export default EventDetails;
