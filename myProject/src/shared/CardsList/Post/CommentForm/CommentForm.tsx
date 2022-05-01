import React, {ChangeEvent, FC, useContext} from 'react';
import styles from './CommentForm.module.css';
import {commentContext} from "../../../context/commentContext";

interface CommentFormProps {
  name: string
}

const CommentForm: FC<CommentFormProps> = ({name}) => {
  const {value, setValue} = useContext(commentContext)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  return (<form id='commentForm' className={styles.CommentForm}>
    <textarea value={value} onChange={handleChange}
              className={styles.CommentTextarea}/>
    <label><span>{name}</span>, оставьте ваш комментарий</label>

    <div className={styles.CommentOptions}>
      <button className={styles.commentButton} type='submit'>Комментировать</button>
    </div>

  </form>)

};

export default CommentForm;
