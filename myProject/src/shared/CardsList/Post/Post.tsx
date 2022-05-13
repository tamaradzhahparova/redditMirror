import React, {FC, useEffect, useRef} from 'react';
import styles from './Post.module.css';
import ReactDOM from "react-dom";
import CardMetaData from "../Card/TextContent/CardMetaData/CardMetaData";
import Likes from "../Card/Controls/Likes/Likes";
import CommentsList from "./CommentsList/CommentsList";
import CommentFormContainer from "./CommentForm/CommentFormContainer";
import {useLocation, useNavigate} from 'react-router-dom';
import {usePostData} from "../../../hooks/usePostData";

interface PostProps {
}

const Post: FC<PostProps> = () => {
  const node = document.querySelector('#modalRoot')
  if (!node) return null
  const ref = useRef<HTMLDivElement>(null)
  
  const navigate = useNavigate();
  let location = useLocation();
  const postId = location.pathname.split('/').reverse()[0]
  
  
  const {comments, postData} = usePostData(postId);
  console.log(postData)
  
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof Node && !ref.current?.contains(event.target))
        navigate('/')
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])
  
  
  return ReactDOM.createPortal((<div className={styles.Post}>
    {!postData && <div>Загрузка...</div>}
    {postData && (
      <div className={styles.PostContent} ref={ref}>
        <div className={styles.PostHeader}>
          <Likes ups={postData.ups}/>
          <div className={styles.PostHeaderRight}>
            <h2 className={styles.modalTitle}>{postData.title}</h2>
            <CardMetaData name={postData.author} created={postData.created} />
          </div>
        </div>
        <p className={styles.PostText}>Есть над чем задуматься: тщательные исследования конкурентов представляют собой
          не
          что иное, как квинтэссенцию
          победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало
          повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но
          сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в
          посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
        <img src='https://img.freepik.com/free-photo/flat-lay-of-business-concept_53876-64851.jpg?w=2000'
             alt='post photo'
             className={styles.PostImg}/>
        <CommentFormContainer name={postData.author}/>
        <CommentsList comments={comments}/>
      </div>
    )}
  
  </div>), node)
  
};

export default Post;
