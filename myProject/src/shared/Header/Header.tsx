import {hot} from "react-hot-loader/root";
import * as React from "react";
import s from "./header.module.css";
import {SearchBlock} from "./SearchBlock/SearchBlock";
import ThreadTitle from "./ThreadTitle/ThreadTitle";
import SortBlock from "./SortBlock/SortBlock";
import Mails from "./Mails/Mails";
import PersonalAccount from "./PersonalAccount/PersonalAccount";

function HeaderComponent() {
  
  return (
    <header className={s.header}>
      <div className={s.headerLeft}>
        <ThreadTitle/>
        <SortBlock/>
      </div>
      <div className={s.headerRight}>
        <Mails/>
        <SearchBlock/>
        <PersonalAccount/>
      
      </div>
    </header>
  );
}

export const Header = hot(HeaderComponent);
