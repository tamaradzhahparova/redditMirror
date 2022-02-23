import React, { FC } from 'react';
import Card from './Card/Card';
import styles from './CardsList.module.css';

interface CardsListProps {}

const CardsList: FC<CardsListProps> = () => (
  <ul className={styles.CardsList}>
    <Card />
  </ul>
);

export default CardsList;
