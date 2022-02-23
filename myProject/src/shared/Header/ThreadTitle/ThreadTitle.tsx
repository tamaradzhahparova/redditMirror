import React, { FC } from 'react';
import styles from './ThreadTitle.module.css';

interface ThreadTitleProps {}

const ThreadTitle: FC<ThreadTitleProps> = () => (
  <div className={styles.ThreadTitle}>
    ThreadTitle Component
  </div>
);

export default ThreadTitle;
