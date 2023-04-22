import {hot} from "react-hot-loader/root";
import * as React from "react";
import s from "./header.module.css";
import {SearchBlock} from "./SearchBlock/SearchBlock";
import ThreadTitle from "./ThreadTitle/ThreadTitle";
import Mails from "./Mails/Mails";
import PersonalAccount from "./PersonalAccount/PersonalAccount";

const HeaderComponent = () => {
  return (
    <header className={s.header}>
      <div className={s.headerLeft}>
        <ThreadTitle/>
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
