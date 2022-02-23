import React, { FC } from 'react';
import styles from './Preview.module.css';

interface PreviewProps {}

const Preview: FC<PreviewProps> = () => (
  <div className={styles.Preview}>
    Preview Component
  </div>
);

export default Preview;
