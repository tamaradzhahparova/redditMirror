import React, {FC, useContext, useEffect, useRef, useState} from 'react';
import styles from './Post.module.css';
import ReactDOM from "react-dom";
import CommentForm from "./CommentForm/CommentForm";
import {TextContentProps} from "../Card/TextContent/TextContent";
import CardMetaData from "../Card/TextContent/CardMetaData/CardMetaData";
import Likes from "../Card/Controls/Likes/Likes";
import CommentsList, {comment} from "./CommentsList/CommentsList";
import {tokenContext} from "../../context/tokenContext";
import {instance} from "../../../hooks/useUserData";

interface PostProps {
  onClose?: () => void
  postData: TextContentProps
  created: number
  iconImg: string
  ups: number
}

const Post: FC<PostProps> = (props) => {
  const [comments, setComments] = useState<Array<comment>>([])
  const token = useContext(tokenContext)
  const node = document.querySelector('#modalRoot')
  if (!node) return null
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof Node && !ref.current?.contains(event.target))
        props.onClose?.()
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])


  useEffect(() => {
    if (token == 'undefined') return

    instance.get(`comments/${props.postData.postId}.json?limit=25`, {
      headers: {Authorization: `bearer ${token}`}
    }).then((res) => {
        const list = res.data[1].data.children
        setComments(list)
      }
    )
  }, [token])


  return ReactDOM.createPortal((<div className={styles.Post}>
    <div className={styles.PostContent} ref={ref}>
      <div className={styles.PostHeader}>
        <Likes ups={props.ups}/>
        <div className={styles.PostHeaderRight}>
          <h2 className={styles.modalTitle}>{props.postData.title}</h2>
          <CardMetaData name={props.postData.name} created={props.created} iconImg={props.iconImg}/>
        </div>

      </div>
      <p className={styles.PostText}>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не
        что иное, как квинтэссенцию
        победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало
        повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но
        сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в
        посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
      <img src='https://img.freepik.com/free-photo/flat-lay-of-business-concept_53876-64851.jpg?w=2000'
           alt='post photo'
           className={styles.PostImg}/>
      <CommentForm name={props.postData.name}/>
      <CommentsList comments={comments}/>

    </div>
  </div>), node)

};

export default Post;
