import React, {FC} from 'react';
import styles from './Comment.module.css';
import Likes from "../../../Card/Controls/Likes/Likes";
import CardMetaData from "../../../Card/TextContent/CardMetaData/CardMetaData";
import CommentControls from "./CommentControls/CommentControls";

interface CommentProps {
  text: string
  author: string
  created: number
}

const Comment: FC<CommentProps> = ({children, author, text, created}) => {

  return (<li className={styles.Comment}>
    <div style={{height: '35px', width: '100%'}}> </div>
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <Likes/>
        <div className={styles.line}> </div>
      </div>
      <div className={styles.textContent}>
        <CardMetaData name={author} created={created} inModal/>
        <p className={styles.commentText}>{text}</p>
        <CommentControls author={author}/>
        {children}
      </div>
    </div>

  </li>)

};

export default Comment;
