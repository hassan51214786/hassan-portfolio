import React from 'react';
import clsx from 'clsx';
import styles from './SystemLog.module.css';
import { systemLogs } from '../utils/mockData';

const SystemLog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>SYSTEM LOGS</div>
      <div className={styles.logList}>
        {systemLogs.map((log) => (
          <div key={log.id} className={styles.logItem}>
            <span className={styles.timestamp}>[{log.timestamp}]</span>
            <div className={styles.content}>
              <span className={clsx(styles.tag, styles[log.type])}>
                {log.type}
              </span>
              {log.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemLog;
