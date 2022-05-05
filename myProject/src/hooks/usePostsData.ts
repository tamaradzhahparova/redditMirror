import {useEffect} from "react";
import {instance} from "./useUserData";
import {useAppDispatch, useAppSelector} from "./reduxHooks";
import {setPosts} from "../redux/postsSlice";

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

 const dispatch = useAppDispatch()
  
  const token = useAppSelector(state => state.tokenSlice.token)

  useEffect(() => {
    instance.get('best.json', {
      headers: {Authorization: `bearer ${token}`}
    }).then((res) => {
      const newPosts = res.data.data.children.map((post: any): IPostData => {
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

}

// to-do - remove all ts-ignore and ANY