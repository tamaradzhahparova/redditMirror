import React, { FC } from 'react';
import styles from './CommentFormContainer.module.css';

interface CommentFormContainerProps {}

const CommentFormContainer: FC<CommentFormContainerProps> = () => (
  <div className={styles.CommentFormContainer}>
    CommentFormContainer Component
  </div>
);

export default CommentFormContainer;
