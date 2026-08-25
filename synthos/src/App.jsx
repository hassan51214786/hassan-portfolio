import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Terminal, Activity, Cpu, HardDrive, BarChart2, List } from 'lucide-react';
import styles from './App.module.css';

// Pages
import DashboardOverview from './pages/DashboardOverview';
import NetworkAnalytics from './pages/NetworkAnalytics';
import SystemLogs from './pages/SystemLogs';

function App() {
  return (
    <div className={styles.appContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.logoGroup}>
          <Terminal className={styles.logo} size={24} />
          <h1 className={styles.title}>SynthOS.Admin</h1>
        </div>
        
        <nav className={styles.nav}>
          <NavLink 
            to="/dashboard" 
            className={({isActive}) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
          >
            <BarChart2 size={18} /> Overview
          </NavLink>
          <NavLink 
            to="/network" 
            className={({isActive}) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
          >
            <Activity size={18} /> Network Analytics
          </NavLink>
          <NavLink 
            to="/logs" 
            className={({isActive}) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
          >
            <List size={18} /> System Logs
          </NavLink>
        </nav>

        <div className={styles.systemStatus}>
          <div className={styles.statusLabel}>SYSTEM STATUS</div>
          <div className={styles.statusIndicator}>
            <div className={styles.dot} />
            ONLINE
          </div>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerBreadcrumb}>/ admin</div>
        </header>
        
        <div className={styles.pageContent}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardOverview />} />
            <Route path="/network" element={<NetworkAnalytics />} />
            <Route path="/logs" element={<SystemLogs />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
