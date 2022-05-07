import { useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./reduxHooks";
import {meRequestAsync} from "../redux/meSlice";

export const useUserData = () => {
  const data = useAppSelector(state => state.meSlice.data)
  const token = useAppSelector(state => state.tokenSlice.token)
  const isFetching = useAppSelector(state => state.meSlice.isFetching)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!token || token == '' || token == 'undefined') return
    dispatch(meRequestAsync(token))
  }, [token])

  return {data, isFetching}
}