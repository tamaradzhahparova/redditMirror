import React, { FC } from "react";
import styles from "./TextContent.module.css";
import CardMetaData from './CardMetaData/CardMetaData'

interface TextContentProps {}

const TextContent: FC<TextContentProps> = () => (
  <div className={styles.TextContent}>
    <h2 className={styles.title}>Реализация намеченных плановых заданий</h2>
    <CardMetaData />
  </div>
);

export default TextContent;
