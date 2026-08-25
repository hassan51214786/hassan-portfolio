import React from 'react';
import clsx from 'clsx';
import styles from './MetricsCard.module.css';

const MetricsCard = ({ title, value, icon, status = 'normal' }) => {
  return (
    <div className={clsx(styles.card, styles[status])}>
      <div className={styles.header}>
        {icon}
        <span>{title}</span>
      </div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default MetricsCard;
