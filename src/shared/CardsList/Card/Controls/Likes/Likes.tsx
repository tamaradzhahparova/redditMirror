import React, {FC} from 'react';
import styles from './Likes.module.css';

interface LikesProps {
  ups?: number
  inCard? : boolean
}

const Likes: FC<LikesProps> = ({ups, inCard}) => (
  <div className={inCard ? `${styles.Likes} ${styles.LikesInCard}` : styles.Likes}>
    <button>
      <svg
        width="19"
        height="10"
        viewBox="0 0 19 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
      </svg>
    </button>
    {ups ? <span className={inCard ? `${styles.count} ${styles.countInCard}` : styles.count}>{ups}</span> : <span className={styles.space}> </span>}
    <button className={styles.buttonDown}>
      <svg
        width="19"
        height="10"
        viewBox="0 0 19 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
      </svg>
    </button>
  </div>
);

export default Likes;
