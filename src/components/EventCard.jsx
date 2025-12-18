import React from 'react';
import './EventCard.css';

const EventCard = ({ event, onViewDetails }) => {
  const { name, date, duration, description, uploadedBy, image } = event;

  return (
    <div className="event-card" onClick={() => onViewDetails(event)}>
      <img src={image} alt={name || 'Event'} className="event-image" />
      <div className="event-details">
        <h3 className="event-name">{name || 'Unnamed Event'}</h3>
        {date && <p className="event-date">{date}</p>}
        
        {/* Corrected logic for conditional info block */}
        {(date || duration) && (
          <p className="event-info">
            {date || 'N/A'} | {duration || 'No duration'}
          </p>
        )}
        
        <p className="event-description">{description || 'No description available.'}</p>
        <p className="event-uploader">
          Uploaded by: {uploadedBy || 'Unknown'}
        </p>
      </div>
    </div>
  );
};

export default EventCard;