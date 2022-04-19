import React, {FC, useContext} from 'react';
import styles from './PostsList.module.css';
import {postsContext} from "../context/postsContext";

interface PostsListProps {
}

const PostsList: FC<PostsListProps> = () => {
  const data = useContext(postsContext)
  console.log(data)


  return (
    <div className={styles.PostsList}>
      PostsList Component
    </div>
  )

};

export default PostsList;
