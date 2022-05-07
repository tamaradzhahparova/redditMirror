import { configureStore} from "@reduxjs/toolkit";
import {commentSlice} from "./commentSlice";
import { tokenSlice} from "./tokenSlice";
import {postsSlice} from "./postsSlice";
import thunk from "redux-thunk";
import {meSlice} from "./meSlice";

const store = configureStore({
  reducer: {
    commentSlice: commentSlice.reducer,
    tokenSlice: tokenSlice.reducer,
    postsSlice: postsSlice.reducer,
    meSlice: meSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store





