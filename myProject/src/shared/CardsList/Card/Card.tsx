import React, { FC } from 'react';
import styles from './Card.module.css';
import Controls from './Controls/Controls';
import Menu from './Menu/Menu';
import Preview from './Preview/Preview';
import TextContent from './TextContent/TextContent';

interface CardProps {}

const Card: FC<CardProps> = () => (
  <li className={styles.Card}>
    <TextContent />
    <Preview />
    <Menu />
    <Controls />
  </li>
);

export default Card;
