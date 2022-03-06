import React, { FC } from 'react';
import styles from './DropdownList.module.css';

interface DropdownListProps {}

const DropdownList: FC<DropdownListProps> = () => (
  <div className={styles.DropdownList}>
    DropdownList Component
  </div>
);

export default DropdownList;
