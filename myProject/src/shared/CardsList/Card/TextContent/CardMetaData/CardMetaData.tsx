import React, { FC } from "react";
import styles from "./CardMetaData.module.css";

interface CardMetaDataProps {}

const CardMetaData: FC<CardMetaDataProps> = () => (
  <div className={styles.CardMetaData}>
    <span className={styles.publishedAt}><span>опубликовано</span> 4 часа назад</span>
    <div className={styles.userLink}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        alt="avatar"
      />
      <a href="#user-url">Дмитрий Гришин</a>
    </div>
  </div>
);

export default CardMetaData;
