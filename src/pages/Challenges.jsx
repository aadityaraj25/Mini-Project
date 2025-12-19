import React, { useState } from "react";
import "./Challenges.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const mockChallenges = [
  {
    id: 1,
    title: '"Any Mammal"',
    prizes: 600,
    status: "Voting starts soon",
    players: null,
    featured: true,
  },
  {
    id: 2,
    title: '"Cultures Across the Globe"',
    prizes: 180,
    status: "Voting starts soon",
    players: null,
    featured: true,
  },
  {
    id: 3,
    title: '"Monkeying Around"',
    prizes: 200,
    status: "Voting starts soon",
    players: null,
    featured: true,
  },
  {
    id: 4,
    title: '"Saturated Sunset & Sunrise"',
    prizes: 600,
    status: "Voting starts soon",
    players: null,
    featured: false,
  },
  {
    id: 5,
    title: '"Solo - Single Subject"',
    prizes: 3000,
    status: "Voting starts soon",
    players: null,
    featured: false,
  },
  {
    id: 6,
    title: '"Memorable Street Art"',
    prizes: 180,
    status: "Voting starts soon",
    players: null,
    featured: false,
  },
];

const closedChallenges = [
  {
    id: 7,
    title: '"Open Theme"',
    players: 62,
    maxPlayers: 100,
    prizes: 85,
    date: "Dec 17, 2025",
    votes: "10K",
  },
  {
    id: 8,
    title: '"Open Theme"',
    players: 67,
    maxPlayers: 100,
    prizes: 85,
    date: "Dec 18, 2025",
    votes: "16K",
  },
  {
    id: 9,
    title: '"Against The Sky"',
    players: 83,
    maxPlayers: 100,
    prizes: 85,
    date: "Dec 18, 2025",
    votes: "12K",
  },
  {
    id: 10,
    title: '"Defined Silhouettes"',
    players: 120,
    maxPlayers: 120,
    prizes: 50,
    date: "Dec 18, 2025",
    votes: "30K",
  },
  {
    id: 11,
    title: '"Small Objects"',
    players: 120,
    maxPlayers: 120,
    prizes: 15,
    date: "Dec 18, 2025",
    votes: "37K",
  },
  {
    id: 12,
    title: '"Small Objects"',
    players: 120,
    maxPlayers: 120,
    prizes: 15,
    date: "Dec 18, 2025",
    votes: "32K",
  },
];

const Challenges = () => {
  const [selectedFilter, setSelectedFilter] = useState("Challenges");
  const [activeTab, setActiveTab] = useState("active");
  const tabs = ["Active", "Completed", "Discover", "Upcoming", "Closed"];

  // Initialize the navigate function
  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate("/user/profile"); // Redirects the user to the /profile route
  };

  const renderContent = () => {
    if (activeTab === "active") {
      return (
        <div className="Challenges-empty-state">
          <div className="Challenges-empty-state-icon">🏁</div>
          <p className="Challenges-empty-state-text">
            YOU ARE NOT PARTICIPATING IN ANY CHALLENGE
          </p>
        </div>
      );
    }

    if (activeTab === "completed") {
      return (
        <div className="Challenges-empty-state">
          <div className="Challenges-empty-state-icon">🖼️</div>
          <p className="Challenges-empty-state-text">
            Your completed Challenges
          </p>
          <p className="Challenges-empty-state-desc">
            This view will fill with challenges that you have completed and have
            finalized in the past 14 days.
          </p>
        </div>
      );
    }

    if (activeTab === "upcoming") {
      return (
        <div className="Challenges-content-area">
          <div className="Challenges-content-header">
            <div className="Challenges-filter-badges">
              {["Challenges", "Flash", "Exhibitions & Magazines"].map(
                (name) => (
                  <div
                    key={name}
                    className={`Challenges-badge ${
                      selectedFilter === name ? "Challenges-active" : ""
                    }`}
                    onClick={() => setSelectedFilter(name)}
                  >
                    {name}
                  </div>
                )
              )}
            </div>
            <div className="Challenges-sort-controls">
              <select className="Challenges-sort-dropdown">
                <option>Start Time</option>
              </select>
              <div className="Challenges-sort-icon">↓</div>
            </div>
          </div>
          <div className="Challenges-grid">
            {mockChallenges.map((challenge, idx) => (
              <div key={challenge.id} className="Challenges-card">
                <div
                  className={`Challenges-card-image Challenges-img${
                    (idx % 6) + 1
                  }`}
                >
                  {challenge.featured && (
                    <div className="Challenges-featured-badge">⭐ FEATURED</div>
                  )}
                </div>
                <div className="Challenges-card-title">{challenge.title}</div>
                <div className="Challenges-card-footer">
                  <div className="Challenges-footer-item">
                    <div className="Challenges-footer-label">Prizes</div>
                    <div className="Challenges-footer-value">
                      ${challenge.prizes}
                    </div>
                  </div>
                  <div className="Challenges-footer-item">
                    <div className="Challenges-footer-label"></div>
                    <div className="Challenges-footer-value">
                      {challenge.status}
                    </div>
                  </div>
                  <div className="Challenges-footer-item">
                    <div className="Challenges-footer-label"></div>
                    <div className="Challenges-footer-value"></div>
                  </div>
                  <div className="Challenges-footer-item">
                    <div className="Challenges-footer-label"></div>
                    <div className="Challenges-footer-value"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeTab === "discover") {
      return (
        <div className="Challenges-content-area">
          <div className="Challenges-content-header">
            <div className="Challenges-filter-badges">
              {["Challenges", "Flash", "Exhibitions & Magazines"].map(
                (name) => (
                  <div
                    key={name}
                    className={`Challenges-badge ${
                      selectedFilter === name ? "Challenges-active" : ""
                    }`}
                    onClick={() => setSelectedFilter(name)}
                  >
                    {name}
                  </div>
                )
              )}
            </div>
            <div className="Challenges-sort-controls">
              <select className="Challenges-sort-dropdown">
                <option>Open Time</option>
              </select>
              <div className="Challenges-sort-icon">↓</div>
            </div>
          </div>
          <div className="Challenges-grid">
            {mockChallenges.map((challenge, idx) => (
              <div key={challenge.id} className="Challenges-card">
                <div
                  className={`Challenges-card-image Challenges-img${
                    (idx % 6) + 1
                  }`}
                >
                  {challenge.featured && (
                    <div className="Challenges-featured-badge">⭐ FEATURED</div>
                  )}
                </div>
                <div className="Challenges-card-title">{challenge.title}</div>
                <div className="Challenges-card-footer">
                  <div className="Challenges-footer-item">
                    <div className="Challenges-footer-label">Players</div>
                    <div className="Challenges-footer-value">10/100</div>
                  </div>
                  <div className="Challenges-footer-item">
                    <div className="Challenges-footer-label">Prizes</div>
                    <div className="Challenges-footer-value">
                      ${challenge.prizes}
                    </div>
                  </div>
                  <div className="Challenges-footer-item">
                    <div className="Challenges-footer-label">Time Left</div>
                    <div className="Challenges-footer-value">01h 48m</div>
                  </div>
                  <div className="Challenges-footer-item">
                    <div className="Challenges-footer-label">Status</div>
                    <div className="Challenges-footer-value">Voting</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeTab === "closed") {
      return (
        <div className="Challenges-content-area">
          <div className="Challenges-content-header">
            <div className="Challenges-filter-badges">
              {["Challenges", "Flash", "Exhibitions & Magazines"].map(
                (name) => (
                  <div
                    key={name}
                    className={`Challenges-badge ${
                      selectedFilter === name ? "Challenges-active" : ""
                    }`}
                    onClick={() => setSelectedFilter(name)}
                  >
                    {name}
                  </div>
                )
              )}
            </div>
            <div className="Challenges-sort-controls">
              <select className="Challenges-sort-dropdown">
                <option>No. of players</option>
              </select>
              <div className="Challenges-sort-icon">↓</div>
            </div>
          </div>
          <div className="Challenges-grid">
            {closedChallenges.map((challenge, idx) => (
              <div key={challenge.id} className="Challenges-card">
                <div
                  className={`Challenges-card-image Challenges-img${
                    (idx % 6) + 1
                  }`}
                >
                  <div className="Challenges-featured-badge">⭐ FEATURED</div>
                </div>
                <div className="Challenges-card-title">{challenge.title}</div>
                <div className="Challenges-card-footer">
                  <div className="Challenges-footer-item">
                    <div className="Challenges-footer-label">Players</div>
                    <div className="Challenges-footer-value">
                      {challenge.players}/{challenge.maxPlayers}
                    </div>
                  </div>
                  <div className="Challenges-footer-item">
                    <div className="Challenges-footer-label">Prizes</div>
                    <div className="Challenges-footer-value">
                      ${challenge.prizes}
                    </div>
                  </div>
                  <div className="Challenges-footer-item">
                    <div className="Challenges-footer-label">Date</div>
                    <div className="Challenges-footer-value">
                      {challenge.date}
                    </div>
                  </div>
                  <div className="Challenges-footer-item">
                    <div className="Challenges-footer-label">Votes</div>
                    <div className="Challenges-footer-value">
                      {challenge.votes}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="Challenges-container">
      {/* Header */}
      <div className="Challenges-header">
        <div className="Challenges-header-left">
          <h1>Challenges</h1>
        </div>
        <div className="Challenges-header-right">
          <div className="Challenges-header-stats">
            <span className="Challenges-stat-item">
              <span className="Challenges-icon">⚔️</span>
              <span className="Challenges-stat-value">0</span>
            </span>
            <span className="Challenges-stat-item">
              <span className="Challenges-icon">⭐</span>
              <span className="Challenges-stat-value">0</span>
            </span>
            <span className="Challenges-stat-item">
              <span className="Challenges-icon">🎯</span>
              <span className="Challenges-stat-value">1</span>
            </span>
            <span className="Challenges-stat-item Challenges-gold">
              <span className="Challenges-icon">🔶</span>
              <span className="Challenges-stat-value">150</span>
            </span>
            {/* ADDED: Notification and Profile Section */}
            <div className="Challenges-user-section">
              <button className="Challenges-nav-icon-btn">
                <span className="Challenges-icon">🔔</span>
              </button>
              <div
                className="Challenges-profile-dropdown"
                onClick={handleProfileClick}
                style={{ cursor: "pointer" }} // Ensures the user knows it's clickable
              >
                <div className="Challenges-avatar">
                  <img src="https://via.placeholder.com/32" alt="User Avatar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="Challenges-tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`Challenges-tab-button ${
              activeTab.toLowerCase() === tab.toLowerCase()
                ? "Challenges-active"
                : ""
            }`}
            onClick={() => setActiveTab(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {renderContent()}
      <Footer />
    </div>
  );
};

export default Challenges;