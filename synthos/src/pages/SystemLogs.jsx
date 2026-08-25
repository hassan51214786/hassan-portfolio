import React from 'react';
import SystemLog from '../components/SystemLog';
import styles from './Pages.module.css';

const SystemLogs = () => {
  return (
    <div className={styles.page}>
      <h2 className={styles.pageTitle}>System Logs</h2>
      <p className={styles.pageDescription}>Real-time streaming logs from all active clusters.</p>
      
      <div className={styles.fullPageLog}>
        <SystemLog />
      </div>
    </div>
  );
};

export default SystemLogs;
