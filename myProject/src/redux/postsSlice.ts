import { createSlice } from '@reduxjs/toolkit'

interface postsState {
  posts: []
}

const initialState: postsState = {
  posts: []
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    }
  }
})

export const { setPosts } = postsSlice.actions