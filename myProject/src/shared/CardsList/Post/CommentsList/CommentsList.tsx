import React, {FC} from 'react';
import Comment from "./Comment/Comment";

interface CommentsListProps {
  comments: Array<comment>
}

export type comment = {
  data: {
    body: string,
    id: string,
    replies: { data: { children: Array<comment> } } | '',
    author: string,
    created: number
  }
  kind: string
}

const CommentsList: FC<CommentsListProps> = ({comments}) => {

  return (<ul>
      {comments.map((item) => item.data.body &&
        <Comment key={item.data.id} text={item.data.body} author={item.data.author} created={item.data.created * 1000}>
          {item.data.replies && item.data.replies.data?.children.length > 0 &&
            <CommentsList comments={item.data.replies.data.children}/>}
        </Comment>)}
    </ul>

  )
};

export default CommentsList;
