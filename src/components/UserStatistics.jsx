import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './UserStatistics.css';
import StatisticCard from './StatisticCard';

const UserStatistics = ({ users }) => {
  const activeUserPercentage = Math.round((users.activeUsers / users.totalUsers) * 100);

  return (
    <div className="user-stats-container">
      <div className="stats-grid">
        <StatisticCard title="Total Users" value={users.totalUsers} />

        <div className="circular-graph-card">
          <h4>Active Users</h4>
          <div style={{ width: 150, height: 150, margin: '0 auto' }}>
            <CircularProgressbar
              value={activeUserPercentage}
              text={`${activeUserPercentage}%`}
              styles={buildStyles({
                textColor: '#3498db',
                pathColor: '#3498db',
                trailColor: '#eaf0f6',
              })}
            />
          </div>
          <p>{users.activeUsers} Currently Active</p>
        </div>

        <StatisticCard title="New Users Today" value={users.newUsersToday} />
      </div>
    </div>
  );
};

export default UserStatistics;
