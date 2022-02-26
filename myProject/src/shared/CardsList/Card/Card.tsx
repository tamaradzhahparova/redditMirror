import React, { FC } from "react";
import styles from "./Card.module.css";
import Controls from "./Controls/Controls";
import Menu from "./Menu/Menu";
import Preview from "./Preview/Preview";
import TextContent from "./TextContent/TextContent";

interface CardProps {}

const Card: FC<CardProps> = () => (
  <li className={styles.Card}>
    <Preview />
    <TextContent />
    <div className={styles.cardOptions}>
      <Menu />
      <Controls />
    </div>
  </li>
);

export default Card;
