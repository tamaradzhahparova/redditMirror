import React, { FC } from "react";
import styles from "./TextContent.module.css";

interface TextContentProps {}

const TextContent: FC<TextContentProps> = () => (
  <div className={styles.TextContent}>
    <h2 className={styles.title}>Реализация намеченных плановых заданий</h2>
    <div className={styles.metaData}>
      <span className={styles.publishedAt}>опубликовано 4 часа назад</span>
      <div className={styles.userLink}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
          alt="avatar"
        />
        <a href="#user-url">Дмитрий Гришин</a>
      </div>
    </div>
  </div>
);

export default TextContent;
