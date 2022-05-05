import React, {ChangeEvent, FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../hooks/reduxHooks";
import CommentForm from "./CommentForm";
import {updateComment} from "../../../../redux/commentSlice";

interface CommentFormContainer {
  name: string
}

const CommentFormContainer: FC<CommentFormContainer> = ({name}) => {
  const value = useAppSelector(state => state.commentSlice.commentText);
  const dispatch = useAppDispatch()
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateComment(e.target.value))
  }
  return <CommentForm name={name} value={value} handleChange={handleChange}/>
  
};

export default CommentFormContainer;
