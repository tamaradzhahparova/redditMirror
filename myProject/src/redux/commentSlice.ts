import { createSlice } from '@reduxjs/toolkit'

interface commentState {
  commentText: string
}

const initialState: commentState = {
  commentText: ''
}

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    updateComment: (state, action) => {
      state.commentText = action.payload
    }
  }
})

export const { updateComment } = commentSlice.actions