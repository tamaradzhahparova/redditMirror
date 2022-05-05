import { createSlice } from '@reduxjs/toolkit'

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