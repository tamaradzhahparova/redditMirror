import React, {FC, useContext, useEffect, useState} from "react";
import styles from "./TextContent.module.css";
import CardMetaData from './CardMetaData/CardMetaData'
import Post from "../../Post/Post";
import {tokenContext} from "../../../context/tokenContext";
import {instance} from "../../../../hooks/useUserData";

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
  const token = useContext(tokenContext)


  useEffect(() => {
    if (token == 'undefined') {
      return;
    }
    instance.get(`user/${props.name}/about`, {
      headers: {Authorization: `bearer ${token}`}
    }).then((res) => {
      setIconImg(res.data.data.icon_img.split('?')[0])
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
