import {useEffect, useState} from "react";
import {comment} from "../shared/CardsList/Post/CommentsList/CommentsList";
import {useAppSelector} from "./reduxHooks";
import {postsApi} from "../api/api";


export const usePostData = (postId: string) => {
  const [comments, setComments] = useState<Array<comment>>([])
  const token = useAppSelector(state => state.tokenSlice.token)
  const posts = useAppSelector(state => state.postsSlice.posts)
  const postData = posts.find(item => item.id == postId)
  
  console.log(posts)
  
  useEffect(() => {
    if (token == 'undefined') return
    postsApi.getComments(token, postId).then((res) => {
        const list = res[1].data.children
        setComments(list)
      }
    )
  }, [token])
  
  return {comments, postData}
}