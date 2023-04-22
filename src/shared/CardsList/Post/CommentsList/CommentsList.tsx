import React, {FC, useState} from 'react';
import Comment from "./Comment/Comment";
import styles from "./CommentsList.module.css";

interface CommentsListProps {
  comments: Array<comment>
}

type commentDataType = {
  body: string,
  id: string,
  replies: { data: { children: Array<comment> } } | '',
  author: string,
  created: number
}

export type comment = {
  data: commentDataType
  kind: string
}
const renderCommentTee = (commentData: commentDataType) => {
  if (commentData.body) {
    return <Comment key={commentData.id} text={commentData.body} author={commentData.author} created={commentData.created * 1000}>
      {commentData.replies && commentData.replies.data.children.length > 0 &&
          <CommentsList comments={commentData.replies.data.children} />}
    </Comment>
  }
  return null
}

const CommentsList: FC<CommentsListProps> = ({comments}) => {
  return (<ul className={styles.CommentsList}>
      {comments.map((item) => {
        return renderCommentTee(item.data)
      })}
    </ul>
  )
};

export default CommentsList;
