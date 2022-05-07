import React, {FC, useEffect, useState} from "react";
import styles from "./TextContent.module.css";
import CardMetaData from './CardMetaData/CardMetaData'
import Post from "../../Post/Post";
import {useAppSelector} from "../../../../hooks/reduxHooks";
import {userApi} from "../../../../api/api";

export interface TextContentProps {
  title: string
  name: string
  created: number
  ups: number
  postId: string
}

const TextContent: FC<TextContentProps> = (props) => {

  const [isModalOpened, setIsModalOpened] = useState(false)
  const [iconImg, setIconImg] = useState('')
  const token = useAppSelector(state => state.tokenSlice.token)


  useEffect(() => {
    if (token == 'undefined') return;
    
    userApi.getUserData(token, props.name).then((res) => {
      setIconImg(res.icon_img.split('?')[0])
    })
  }, [props.name, token])


  return (
    <div className={styles.TextContent}>
      <h2 onClick={() => setIsModalOpened(true)}>
        <button className={styles.title}>{props.title}</button>
      </h2>
      <CardMetaData name={props.name} created={props.created} iconImg={iconImg}/>
      {isModalOpened && (
        <Post onClose={() => setIsModalOpened(false)} postData={props} created={props.created} iconImg={iconImg}
              ups={props.ups}/>)}
    </div>
  )

};

export default TextContent;
