import React, {useEffect} from "react";
import s from './Layout.module.css'
import {useAppDispatch} from "../../hooks/reduxHooks";
import {saveToken} from "../../redux/tokenSlice";
import {savePostsData} from "../../redux/postsSlice";

interface IChildrenProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: IChildrenProps) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(saveToken())
    dispatch(savePostsData())
  }, [])
  return <div className={s.wrapper}>{children}</div>;
};
