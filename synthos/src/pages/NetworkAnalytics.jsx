import React from 'react';
import NetworkGraph from '../components/NetworkGraph';
import styles from './Pages.module.css';

const NetworkAnalytics = () => {
  return (
    <div className={styles.page}>
      <h2 className={styles.pageTitle}>Network Analytics</h2>
      
      <div className={styles.chartGrid}>
        <NetworkGraph dataKey="traffic" title="INBOUND TRAFFIC (Gbps)" color="var(--status-normal)" />
        <NetworkGraph dataKey="latency" title="API LATENCY (ms)" color="var(--accent-secondary)" />
      </div>
    </div>
  );
};

export default NetworkAnalytics;
