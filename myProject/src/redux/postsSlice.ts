import {Action, createSlice, ThunkAction} from '@reduxjs/toolkit'
import {RootState} from "./store";
import {postsApi} from "../api/api";

export interface IPostData {
  title: string
  author: string
  photoUrl: string
  id: string
  ups: number
  created: number,
  comments: number
  icon_img: string
}

interface postsState {
  posts: Array<IPostData>
  isFetching: boolean
  errorLoading: string | null
  after: string | null
}

const initialState: postsState = {
  posts: [],
  isFetching: false,
  errorLoading: null,
  after: null
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = state.posts.concat(...action.payload)
    },
    postsIsFetching: (state, action) => {
      state.isFetching = action.payload
    },
    setErrorMessage: (state, action) => {
      state.errorLoading = action.payload
    },
    setAfter: (state, action) => {
      state.after = action.payload
    },
  }
})

export const savePostsData = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const token = getState().tokenSlice.token
  const after = getState().postsSlice.after
    dispatch(postsIsFetching(true));
    postsApi.getBestPosts(token, after).then((res) => {
      const newPosts = res.data.children.map((post: any): IPostData => {
        return {
          title: post.data.title,
          author: post.data.author,
          photoUrl: post.data.url,
          id: post.data.id,
          ups: post.data.ups,
          created: post.data.created * 1000,
          comments: post.data.num_comments,
          icon_img: post.data.sr_detail.icon_img
        }
      })
      dispatch(setPosts(newPosts))
      dispatch(setAfter(res.data.after))
      dispatch(postsIsFetching(false))
    }).catch((error) => {
      dispatch(postsIsFetching(false))
      dispatch(setErrorMessage(error.toString()));
    })
}


export const { setPosts, postsIsFetching, setErrorMessage, setAfter } = postsSlice.actions