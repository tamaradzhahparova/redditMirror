import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './Post.module.css';
import ReactDOM from "react-dom";
import {TextContentProps} from "../Card/TextContent/TextContent";
import CardMetaData from "../Card/TextContent/CardMetaData/CardMetaData";
import Likes from "../Card/Controls/Likes/Likes";
import CommentsList, {comment} from "./CommentsList/CommentsList";
import CommentFormContainer from "./CommentForm/CommentFormContainer";
import {useAppSelector} from "../../../hooks/reduxHooks";
import {postsApi} from "../../../api/api";

interface PostProps {
  onClose?: () => void
  postData: TextContentProps
  created: number
  iconImg: string
  ups: number
}

const Post: FC<PostProps> = (props) => {
  const [comments, setComments] = useState<Array<comment>>([])
  const token = useAppSelector(state => state.tokenSlice.token)
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
    postsApi.getComments(token, props.postData.postId ).then((res) => {
        const list = res[1].data.children
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
      <CommentFormContainer name={props.postData.name}/>
      <CommentsList comments={comments}/>
    </div>
  </div>), node)

};

export default Post;
