import React from "React";

interface IChildrenProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IChildrenProps) => {
  return <div>{children}</div>;
};
