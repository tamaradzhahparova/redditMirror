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
}

const TextContent: FC<TextContentProps> = ({postId, title, name, created}) => {
  
  const [iconImg, setIconImg] = useState('')
  const token = useAppSelector(state => state.tokenSlice.token)


  useEffect(() => {
    if (token == 'undefined' || !token) return;
    userApi.getUserData(token, name).then((res) => {
      setIconImg(res.icon_img.split('?')[0])
    })
  }, [name, token])


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
