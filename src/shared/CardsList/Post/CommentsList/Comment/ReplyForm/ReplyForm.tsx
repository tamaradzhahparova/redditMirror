import React, {ChangeEvent, FC, useEffect, useRef, useState} from 'react';
import styles from './ReplyForm.module.css';

interface ReplyFormProps {
  author: string
}

const ReplyForm: FC<ReplyFormProps> = ({author}) => {
  const name = `${author}, `
  const [value, setValue] = useState(name)
  const ref = useRef<HTMLTextAreaElement>(null)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
      ref.current.value = ''
      ref.current.value = value
    }
  }, [])


  return (<div className={styles.ReplyForm}>
    <textarea value={value} className={styles.textarea} onChange={handleChange} ref={ref}/>
    <button className={styles.replyButton}>Отправить комментарий</button>
  </div>)

};

export default ReplyForm;
