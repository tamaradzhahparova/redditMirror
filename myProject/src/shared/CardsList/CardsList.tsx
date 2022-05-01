import React, {FC, useContext} from 'react';
import Card from './Card/Card';
import styles from './CardsList.module.css';
import {postsContext} from "../context/postsContext";
import {IPostData} from "../../hooks/usePostsData";

interface CardsListProps {
}

const CardsList: FC<CardsListProps> = () => {
  const data: Array<IPostData> = useContext(postsContext)

  return (
    <ul className={styles.CardsList}>
      {data.map((post) => <Card key={post.id} post={post} />)}
    </ul>
  )

};

export default CardsList;
