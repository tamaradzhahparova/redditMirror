import React, {FC} from "react";
import styles from "./CardMetaData.module.css";

interface CardMetaDataProps {
  name: string
  created: number
  iconImg?: string
  inModal?: boolean
}

function declOfNum(number: number, titles: Array<string>) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}


const CardMetaData: FC<CardMetaDataProps> = ({name, created, iconImg, inModal}) => {

  const date = new Date();
  const now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
  const createdAgo = Math.round((now_utc - created) / 3600000);


  return (
    <div className={inModal ? `${styles.CardMetaData} ${styles.inModal}` : styles.CardMetaData}>
      <span
        className={styles.publishedAt}>
        <span>опубликовано</span>{` ${createdAgo} ${declOfNum(createdAgo, ['час', 'часа', 'часов'])} назад`}</span>
      <div className={styles.userLink}>
        {iconImg ? <img src={iconImg} alt='avatar'/> : <img
          src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
          alt="avatar"
        />}
        <a href={`https://www.reddit.com/user/${name}/`}>{name}</a>
      </div>
    </div>
  )
};

export default CardMetaData;
