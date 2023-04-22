import React, {FC, useEffect, useRef} from 'react';
import styles from './Post.module.css';
import ReactDOM from "react-dom";
import CardMetaData from "../Card/TextContent/CardMetaData/CardMetaData";
import Likes from "../Card/Controls/Likes/Likes";
import CommentsList from "./CommentsList/CommentsList";
import CommentFormContainer from "./CommentForm/CommentFormContainer";
import {useLocation, useNavigate} from 'react-router-dom';
import {usePostData} from "../../../hooks/usePostData";
import {ClosePost} from "../../../img/icons/icons";

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
          <div className={styles.postHeaderWrapper}>
            <Likes ups={postData.ups}/>
            <div className={styles.PostHeaderRight}>
              <h2 className={styles.modalTitle}>{postData.title}</h2>
              <CardMetaData name={postData.author} created={postData.created} iconImg={postData.icon_img}/>
            </div>
          </div>
          <button onClick={() => navigate('/')} className={styles.closeBtn}>
            <ClosePost/>
          </button>
        </div>
        {postData.photoUrl && <img
            src={postData.photoUrl}
            alt='post photo'
            className={styles.PostImg}/>}
        <CommentFormContainer name={postData.author}/>
        <CommentsList comments={comments}/>
      </div>
    )}
  
  </div>), node)
  
};

export default Post;
