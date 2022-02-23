import React, { FC } from 'react';
import styles from './Controls.module.css';

interface ControlsProps {}

const Controls: FC<ControlsProps> = () => (
  <div className={styles.Controls}>
    Controls Component
  </div>
);

export default Controls;
