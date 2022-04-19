import React, {FC, useContext, useEffect, useState} from "react";
import styles from "./CardMetaData.module.css";
import axios from "axios";
import {tokenContext} from "../../../../context/tokenContext";

interface CardMetaDataProps {
  name: string
  created: number
}

function declOfNum(number: number, titles: Array<string>) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}



const CardMetaData: FC<CardMetaDataProps> = ({name, created}) => {

  const [iconImg, setIconImg] = useState('')
  const token = useContext(tokenContext)

  const date = new Date();
  const now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
  const createdAgo = Math.round((now_utc - created) / 3600000);


  useEffect(() => {
    if (token == 'undefined') {
      return;
    }
    axios.get(`https://oauth.reddit.com/user/${name}/about`, {
      headers: {Authorization: `bearer ${token}`}
    }).then((res) => {
      setIconImg(res.data.data.icon_img.split('?')[0])
    })
  }, [name, token])

  return (
    <div className={styles.CardMetaData}>
      <span
        className={styles.publishedAt}>
        <span>опубликовано</span>{`${createdAgo} ${declOfNum(createdAgo, ['час', 'часа', 'часов'])} назад`}</span>
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
