import React, {useEffect} from "react";
import s from './Layout.module.css'
import {useAppDispatch} from "../../hooks/reduxHooks";
import {saveToken} from "../../redux/tokenSlice";

interface IChildrenProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: IChildrenProps) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(saveToken())
  }, [])
  return <div className={s.wrapper}>{children}</div>;
};
