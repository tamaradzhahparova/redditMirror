import React, { FC } from 'react';
import styles from './ThreadTitle.module.css';

interface ThreadTitleProps {}

const ThreadTitle: FC<ThreadTitleProps> = () => (
  <div className={styles.ThreadTitle}>
    Дискуссии
  </div>
);

export default ThreadTitle;
