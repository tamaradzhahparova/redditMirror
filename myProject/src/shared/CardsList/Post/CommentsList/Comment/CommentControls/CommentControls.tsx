import React, {FC, useState} from 'react';
import styles from './CommentControls.module.css';
import {CommentIcon, ShareIcon, WarningIcon} from "../../../../../../img/icons/icons";
import ReplyForm from "../ReplyForm/ReplyForm";


interface CommentControlsProps {
  author: string
}

const CommentControls: FC<CommentControlsProps> = ({author}) => {
  const [isReplyFormOpened, setIsReplyFormOpened] = useState(false)

  const handleClick = () => {
    setIsReplyFormOpened(!isReplyFormOpened)
  }

  return (<div className={styles.wrapper}>
    <div className={styles.CommentControls}>
      <button onClick={handleClick}>
        <CommentIcon/>
        <span className={styles.controlsText}>Ответить</span>
      </button>

      <button>
        <ShareIcon/>
        <span className={styles.controlsText}>Поделиться</span>
      </button>

      <button>
        <WarningIcon/>
        <span className={styles.controlsText}>Пожаловаться</span>
      </button>
    </div>
    {isReplyFormOpened && <ReplyForm author={author}/>}

  </div>)

};

export default CommentControls;
