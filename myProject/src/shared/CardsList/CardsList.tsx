import React, {FC} from 'react';
import Card from './Card/Card';
import styles from './CardsList.module.css';
import {IPostData, usePostsData} from "../../hooks/usePostsData";

interface CardsListProps {
}

const CardsList: FC<CardsListProps> = () => {
  const posts: Array<IPostData> = usePostsData()
  return (
    <ul className={styles.CardsList}>
      {posts.map((post) => <Card key={post.id} post={post} />)}
    </ul>
  )
};

export default CardsList;
