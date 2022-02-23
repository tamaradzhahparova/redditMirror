import React, { FC } from 'react';
import styles from './SortBlock.module.css';

interface SortBlockProps {}

const SortBlock: FC<SortBlockProps> = () => (
  <div className={styles.SortBlock}>
    SortBlock Component
  </div>
);

export default SortBlock;
