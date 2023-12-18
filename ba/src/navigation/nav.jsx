// Header.jsx

import { useState } from 'react';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';
import PlayGame from '../side_bar/playGame';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <>
      <nav className={styles.navigation}>
        <div className="logo">
          <img src="/image/logo.png" alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About_game">Rules</Link></li>
            <li ><Link to="/About_Baghchal">Baghchal</Link></li>
            <li onClick={toggleSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" height="49" viewBox="0 -900 960 960" width="70"  style={{ fill: 'white' }}>
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
              </svg>
            </li>
          </ul>
        </div>
      </nav>

      <ul className={`${styles.side_links} ${isSidebarOpen ? styles.show : ''}`}>
        <li onClick={closeSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" height="70" viewBox="0 -960 960 960" width="90" style={{ fill: 'white' }}>
            <path d="m200-256-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
        </li> 
        <PlayGame />
      </ul>
      
    </>
  );
}

export default Header;
