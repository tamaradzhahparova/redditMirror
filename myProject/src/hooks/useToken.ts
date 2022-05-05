import {useEffect} from "react";
import {useAppDispatch} from "./reduxHooks";
import {setToken} from "../redux/tokenSlice";

export function useToken() {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    if (window.__token__) {
      dispatch(setToken(window.__token__))
    }
  }, [])
  
}