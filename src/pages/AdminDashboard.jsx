import React, { useState, useEffect } from 'react';
import { FaUsers, FaCalendarAlt, FaChartBar, FaBell, FaCog, FaSearch, FaPlus, FaEdit, FaTrash, FaUserPlus } from 'react-icons/fa';
import { CheckCircle, AlertTriangle, Info, Mail } from 'lucide-react';
import './AdminDashboard.css';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import EventDetails from '../components/EventDetails';
import { mockEvents, mockUsers, mockStats } from '../data';
import UserStatistics from '../components/UserStatistics';
import AddEventForm from '../components/AddEventForm';

const AdminDashboard = () => {
  const [events, setEvents] = useState(mockEvents);
  const [users, setUsers] = useState(mockUsers);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [stats, setStats] = useState(mockStats);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New event registration received', type: 'success', time: '2 min ago' },
    { id: 2, message: 'User account suspended', type: 'warning', time: '1 hour ago' },
    { id: 3, message: 'Feedback Recieved', type: 'mail', time: '3 hours ago' }
  ]);

  // Filter events based on search
  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredUsers = Object.keys(users).filter(user =>
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewEventDetails = (event) => {
    setSelectedEvent(event);
  };

  const handleBackToEvents = () => {
    setSelectedEvent(null);
  };

  const handleAddNewEvent = () => {
    setShowAddEventForm(true);
  };

  const handleCancelAddEvent = () => {
    setShowAddEventForm(false);
  };

  const handleAddEvent = (newEvent) => {
    setEvents([newEvent, ...events]);
    setShowAddEventForm(false);
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const handleManageUsers = () => {
    setActiveTab('Users');
  };

  const renderDashboard = () => (
    <div className="dashboard-grid">
      <div className="stats-cards">
        <div className="stat-card primary">
          <div className="stat-icon"><FaUsers /></div>
          <div className="stat-details">
            <div className="stat-header">
              <h3>{stats.totalUsers}</h3>
              <div className="stat-change positive">+12%</div>
            </div>
            <p>Total Users</p>
          </div>
        </div>
        <div className="stat-card success">
          <div className="stat-icon"><FaCalendarAlt /></div>
          <div className="stat-details">
            <div className="stat-header">
              <h3>{stats.totalEvents}</h3>
              <div className="stat-change positive">+8%</div>
            </div>
            <p>Events</p>
          </div>
        </div>
        <div className="stat-card warning">
          <div className="stat-icon"><FaChartBar /></div>
          <div className="stat-details">
            <div className="stat-header">
              <h3>{stats.revenue}</h3>
              <div className="stat-change negative">-2%</div>
            </div>
            <p>Revenue</p>
          </div>
        </div>
        <div className="stat-card info">
          <div className="stat-icon"><FaBell /></div>
          <div className="stat-details">
            <div className="stat-header">
              <h3>{notifications.length}</h3>
              <div className="stat-change positive">+5</div>
            </div>
            <p>Notifications</p>
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <div className="section-header">
          <h3>Recent Activity</h3>
        </div>
        <div className="activity-list">
          {notifications.map((notif) => (
            <div key={notif.id} className={`activity-item ${notif.type}`}>
              <div className="activity-icon">
                {notif.type === 'success' && <CheckCircle />}
                {notif.type === 'warning' && <AlertTriangle />}
                {notif.type === 'mail' && <Mail />}
              </div>
              <div>
                <p>{notif.message}</p>
                <span>{notif.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEventManagement = () => (
    <div className="section">
      {showAddEventForm && (
        <AddEventForm onAddEvent={handleAddEvent} onCancel={handleCancelAddEvent} />
      )}
      <div className="section-header">
        <div>
          <h2>Event Management</h2>
          <p className="section-subtitle">Manage all your events and registrations</p>
        </div>
        <div className="header-actions">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <button className="button add-event-btn" onClick={handleAddNewEvent}>
            <FaPlus /> Add New Event
          </button>
        </div>
      </div>

      {selectedEvent ? (
        <EventDetails event={selectedEvent} onBack={handleBackToEvents} />
      ) : (
        <div className="events-list enhanced">
          {filteredEvents.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              onViewDetails={handleViewEventDetails}
              onDelete={handleDeleteEvent}
            />
          ))}
          {filteredEvents.length === 0 && (
            <div className="empty-state">
              <FaCalendarAlt className="empty-icon" />
              <h3>No events found</h3>
              <p>Try adjusting your search or create a new event</p>
            </div>
          )}
        </div>
      )}
    </div>
  );

  const renderUserManagement = () => (
    <div className="section">
      <div className="section-header">
        <div>
          <h2>User Management</h2>
          <p className="section-subtitle">Monitor and manage user accounts</p>
        </div>
        <div className="header-actions">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <button className="button manage-users-btn">
            <FaUserPlus /> Add New User
          </button>
        </div>
      </div>
      <UserStatistics users={users} />
      {filteredUsers.length === 0 && (
        <div className="empty-state">
          <FaUsers className="empty-icon" />
          <h3>No users found</h3>
          <p>Try adjusting your search terms</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <FaChartBar className="logo-icon" />
            <h3>Admin Panel</h3>
          </div>
        </div>
        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeTab === "Dashboard" ? "active" : ""}`}
            onClick={() => setActiveTab("Dashboard")}
          >
            <FaChartBar className="nav-icon" />
            Dashboard
          </button>
          <button
            className={`nav-item ${activeTab === "Events" ? "active" : ""}`}
            onClick={() => setActiveTab("Events")}
          >
            <FaCalendarAlt className="nav-icon" />
            Events
          </button>
          <button
            className={`nav-item ${activeTab === "Users" ? "active" : ""}`}
            onClick={() => setActiveTab("Users")}
          >
            <FaUsers className="nav-icon" />
            Users
          </button>
        </nav>
        <div className="sidebar-footer">
          <button className="nav-item settings-btn">
            <FaCog className="nav-icon" />
            Settings
          </button>
        </div>
      </div>

      <div className="main-wrapper">
        <div className="main-content">
          <header className="main-header">
            <div className="header-left">
              <h1 className="dashboard-title">
                {activeTab === 'Dashboard' ? 'Dashboard' : 
                 activeTab === 'Events' ? 'Event Management' : 'User Management'}
              </h1>
            </div>
            <div className="header-right">
              <div className="notification-bell">
                <FaBell />
                <span className="notification-dot"></span>
              </div>
            </div>
          </header>

          <div className="content-area">
            {activeTab === "Dashboard" && renderDashboard()}
            {activeTab === "Events" && renderEventManagement()}
            {activeTab === "Users" && renderUserManagement()}
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboard;
