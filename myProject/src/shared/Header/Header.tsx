import { hot } from "react-hot-loader/root";
import * as React from "react";
import s from "./header.module.css";
import { SearchBlock } from "./SearchBlock/SearchBlock";
import ThreadTitle from "./ThreadTitle/ThreadTitle";
import SortBlock from "./SortBlock/SortBlock";

function HeaderComponent() {
  return (
    <header className={s.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}

export const Header = hot(HeaderComponent);
