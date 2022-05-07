import {Action, createSlice, ThunkAction} from '@reduxjs/toolkit'
import {RootState} from "./store";
import {userApi} from "../api/api";

interface meState {
  data: { name: string, iconImg: string}
  isFetching: boolean
  errorMessage: string
}

const initialState: meState = {
  data: {
    name: '',
    iconImg: '',
  },
  isFetching: false,
  errorMessage: ''
}

export const meSlice = createSlice({
  name: 'me',
  initialState,
  reducers: {
    setMyData: (state, action) => {
      state.data = action.payload
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload
    },
  }
})

export const { setMyData, setIsFetching, setErrorMessage } = meSlice.actions

export const meRequestAsync = (token: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  dispatch(setIsFetching(true))
  userApi.authMe(token).then((res) => {
    const iconImgWithoutParams = res.icon_img.split('?')
    const userData = {name: res.name, iconImg: iconImgWithoutParams[0]}
    dispatch(setMyData(userData))
    dispatch(setIsFetching(false))
  }).catch((error) => {
    dispatch(setIsFetching(false))
    dispatch(setErrorMessage(error))
    console.log(error)
  })
}