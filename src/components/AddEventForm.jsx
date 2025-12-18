import React, { useState } from 'react';
import './AddEventForm.css';

const AddEventForm = ({ onAddEvent, onCancel }) => {
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    duration: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewEvent({ ...newEvent, image: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent({ ...newEvent, id: Date.now(), uploadedBy: 'Admin' });
    setNewEvent({
      name: '',
      date: '',
      duration: '',
      description: '',
      image: null,
    });
  };

  return (
    <div className="add-event-form-container">
      <form onSubmit={handleSubmit} className="add-event-form">
        <h2>Add New Event</h2>
        <div className="form-group">
          <label htmlFor="name">Event Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newEvent.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Event Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={newEvent.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (e.g., 2 hours)</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={newEvent.duration}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Event Description</label>
          <textarea
            id="description"
            name="description"
            value={newEvent.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Event Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="button submit-btn">Create Event</button>
          <button type="button" className="button cancel-btn" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddEventForm;
