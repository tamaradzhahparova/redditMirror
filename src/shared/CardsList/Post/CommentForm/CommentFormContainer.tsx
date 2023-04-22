import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../hooks/reduxHooks";
import CommentForm from "./CommentForm";
import {updateComment} from "../../../../redux/commentSlice";

interface CommentFormContainer {
  name: string
}

export interface IFormData {
  comment: string
}

const CommentFormContainer: FC<CommentFormContainer> = ({name}) => {
  const value = useAppSelector(state => state.commentSlice.commentText);
  const dispatch = useAppDispatch()

  const handleSubmit = (data: IFormData) => {
    dispatch(updateComment(data.comment))
  }
  return <CommentForm name={name} value={value} setComment={handleSubmit} />
};

export default CommentFormContainer;
