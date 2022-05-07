import {Action, createSlice, ThunkAction} from '@reduxjs/toolkit'
import {RootState} from "./store";

interface tokenState {
  token: string
}

const initialState: tokenState = {
  token: ''
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    }
  }
})

export const { setToken } = tokenSlice.actions

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  const token = localStorage.getItem('token') || window.__token__
  dispatch(setToken(token))
  if (token != 'undefined') {
    localStorage.setItem('token', token)
  }
}

