import React, {ChangeEvent, FC} from 'react';
import styles from './CommentForm.module.css';

interface CommentFormProps {
  name: string
  value: string
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const CommentForm: FC<CommentFormProps> = ({name, value, handleChange}) => {
  
  return (<form id='commentForm' className={styles.CommentForm}>
    <textarea value={value} onChange={handleChange}
              className={styles.CommentTextarea}/>
    {value == '' ? <label><span>{name}</span>, оставьте ваш комментарий</label> : null}
    <div className={styles.CommentOptions}>
      <button className={styles.commentButton} type='submit'>Комментировать</button>
    </div>
  
  </form>)
  
};

export default CommentForm;
