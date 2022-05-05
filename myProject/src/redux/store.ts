import {configureStore} from "@reduxjs/toolkit";
import {commentSlice} from "./commentSlice";
import {tokenSlice} from "./tokenSlice";
import {postsSlice} from "./postsSlice";

const store = configureStore({
  reducer: {
    commentSlice: commentSlice.reducer,
    tokenSlice: tokenSlice.reducer,
    postsSlice: postsSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store





