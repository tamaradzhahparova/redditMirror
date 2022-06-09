import React, {FC, useEffect, useState} from "react";
import styles from "./TextContent.module.css";
import CardMetaData from './CardMetaData/CardMetaData'
import {useAppSelector} from "../../../../hooks/reduxHooks";
import {userApi} from "../../../../api/api";
import {Link} from 'react-router-dom'

export interface TextContentProps {
  title: string
  name: string
  created: number
  postId: string
  iconImg: string
}

const TextContent: FC<TextContentProps> = ({postId, title, name, created, iconImg}) => {
  
  return (
    <div className={styles.TextContent}>
      <Link to={`/posts/${postId}`} className={styles.title} >
      {title}
      </Link>
      <CardMetaData name={name} created={created} iconImg={iconImg}/>
    </div>
  )

};

export default TextContent;
