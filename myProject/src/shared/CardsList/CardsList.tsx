import React, {FC} from 'react';
import Card from './Card/Card';
import styles from './CardsList.module.css';
import {IPostData, usePostsData} from "../../hooks/usePostsData";
import {useAppSelector} from "../../hooks/reduxHooks";

interface CardsListProps {
}

const CardsList: FC<CardsListProps> = () => {
  
  usePostsData()
  const data: Array<IPostData> = useAppSelector(state => state.postsSlice.posts)

  
  return (
    <ul className={styles.CardsList}>
      {data.map((post) => <Card key={post.id} post={post} />)}
    </ul>
  )

};

export default CardsList;
