import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./reduxHooks";
import {setPosts} from "../redux/postsSlice";
import {postsApi} from "../api/api";

export interface IPostData {
  title: string
  author: string
  photoUrl: string
  id: string
  ups: number
  created: number,
  comments: number
}

export const usePostsData = () => {
  const posts = useAppSelector(state => state.postsSlice.posts)
  const token = useAppSelector(state => state.tokenSlice.token)
  const dispatch = useAppDispatch()

  useEffect(() => {
    postsApi.getBestPosts(token).then((res) => {
      const newPosts = res.data.children.map((post: any): IPostData => {
        return {
          title: post.data.title,
          author: post.data.author,
          photoUrl: post.data.url,
          id: post.data.id,
          ups: post.data.ups,
          created: post.data.created * 1000,
          comments: post.data.num_comments
        }
      })
      dispatch(setPosts(newPosts))
    })
  }, [])
  
  return posts
}
