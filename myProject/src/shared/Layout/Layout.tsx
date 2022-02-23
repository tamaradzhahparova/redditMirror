import React from "react";
import s from './Layout.module.css'

interface IChildrenProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: IChildrenProps) => {
  return <div className={s.wrapper}>{children}</div>;
};
