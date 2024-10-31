// src/components/Dashboard/Dashboard.jsx
import styles from './Dashboard.module.scss';

import { Link } from "react-router-dom";

const Dashboard = ({ user }) => {
  return (
    <main>
      <div className={styles.welcome}>
        <div
          className={styles.userPhoto}
          style={{
            backgroundImage: `url(${user.photo})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          alt={`Profile photo of ${user.username}`}
        />
        <h1>Hi {user.username} 👋</h1>
      </div>
      <div className={styles.buttons}>
        <Link to="/job/new">Post Job</Link>
        <Link to="/helper/details/id">My helper profile</Link>
      </div>
      {/* <div className='jobsSection'>
        <h2>
          Recent jobs near me
        </h2>
        <ul className='jobs'>
          <li className='job'></li>
          <li className='job'></li>
          <li className='job'></li>
        </ul>
      </div>
      <div className='helpersSection'>
        <h2>
          Local helpers
        </h2>
        <ul className='helpers'>
          <li className='helper'></li>
          <li className='helper'></li>
          <li className='helper'></li>
        </ul>
      </div> */}
    </main>
  );
};

export default Dashboard;