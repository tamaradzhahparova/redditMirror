import React, { FC } from 'react';
import styles from './Menu.module.css';

interface MenuProps {}

const Menu: FC<MenuProps> = () => (
  <div className={styles.Menu}>
    Menu Component
  </div>
);

export default Menu;
