import React, {FC, useState} from 'react';
import styles from './CommentForm.module.css';
import {SubmitHandler, useForm} from "react-hook-form";
import {IFormData} from "./CommentFormContainer";
import comment from "../CommentsList/Comment/Comment";

interface CommentFormProps {
  name: string
  value: string
  setComment: (data: IFormData) => void
}

type Inputs = {
  comment: string,
};

const CommentForm: FC<CommentFormProps> = ({name, value, setComment}) => {
  const [isLabelVisible, setIsLabelVisible] = useState(true)
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => setComment(data)
  
  const handleBlur = () => {
    getValues('comment') != '' ? setIsLabelVisible(false) : setIsLabelVisible(true)
  }
  
  return (<form id='commentForm' className={styles.CommentForm} onSubmit={handleSubmit(onSubmit)}>
    <textarea defaultValue={value}
              className={styles.CommentTextarea}
              {...register("comment", { required: true })}
              onBlur={handleBlur} />
    {isLabelVisible && <label htmlFor='commentForm'><span>{name}</span>, оставьте ваш комментарий</label>}
    <div className={styles.CommentOptions}>
      {errors.comment && <span className={styles.error}>введите комментарий</span>}
      <button className={styles.commentButton} type='submit'>Комментировать</button>
    </div>
  </form>)
  
};

export default CommentForm;
