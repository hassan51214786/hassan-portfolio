import React from 'react';
import { Cpu, HardDrive, Activity } from 'lucide-react';
import MetricsCard from '../components/MetricsCard';
import NetworkGraph from '../components/NetworkGraph';
import { coreMetrics } from '../utils/mockData';
import styles from './Pages.module.css';

const DashboardOverview = () => {
  return (
    <div className={styles.page}>
      <h2 className={styles.pageTitle}>Dashboard Overview</h2>
      
      <div className={styles.metricsGrid}>
        <MetricsCard 
          title="CPU LOAD" 
          value={`${coreMetrics.cpu}%`} 
          icon={<Cpu size={20} />} 
          status={coreMetrics.cpu > 80 ? 'warning' : 'normal'} 
        />
        <MetricsCard 
          title="MEMORY USAGE" 
          value={`${coreMetrics.memory}%`} 
          icon={<HardDrive size={20} />} 
          status={coreMetrics.memory > 90 ? 'critical' : 'normal'} 
        />
        <MetricsCard 
          title="NETWORK I/O" 
          value={`${coreMetrics.network} GB/s`} 
          icon={<Activity size={20} />} 
          status="normal" 
        />
      </div>

      <div className={styles.chartSection}>
        <NetworkGraph dataKey="traffic" title="NETWORK TRAFFIC (Gbps)" color="var(--status-normal)" />
      </div>
    </div>
  );
};

export default DashboardOverview;
