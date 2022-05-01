import {useContext, useEffect, useState} from "react";
import {tokenContext} from "../shared/context/tokenContext";
import {instance} from "./useUserData";

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

  const [posts, setPosts] = useState([])
  const token = useContext(tokenContext)

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
      setPosts(newPosts)
    })
  }, [])

  return [posts]

}

//to-do - save base URL in axios options
// to-do - remove all ts-ignore and ANY