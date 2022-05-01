import React, {FC, useState} from 'react';
import styles from './DropdownList.module.css';
import {generateId} from "../../../../utils/js/generateRandomIndex";
import ReactDOM from "react-dom";
import {CommentIcon, ShareIcon, WarningIcon} from "../../../../img/icons/icons";

const LIST = [
  {
    icon: <CommentIcon/>,
    text: 'Комментарии',
  },
  {
    icon: <ShareIcon/>,
    text: 'Поделиться',
  },
  {
    icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z"
        fill="#999999"/>
    </svg>,
    text: 'Скрыть',
  },
  {
    icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z"
        fill="#979797"/>
    </svg>,
    text: 'Сохранить',
  },
  {
    icon: <WarningIcon/>,
    text: 'Пожаловаться',
  }
].map(generateId)

interface DropdownListProps {
  postId: number
  style: { top: string, left: string }
}


const DropdownList: FC<DropdownListProps> = ({postId, style}) => {
  const [list] = useState(LIST)
  const node = document.querySelector('#dropdownRoot')
  if (!node) return null


  return ReactDOM.createPortal((
    <>
      <ul className={styles.DropdownList} style={style}>
        {list.map((item) => <MenuDropdownItem postId={postId} icon={item.icon} key={item.id} text={item.text}/>)}
        <button className={styles.menuCloseButton}>Закрыть</button>
      </ul>
    </>), node)
};

interface IMenuDropdownItem {
  icon: React.SVGProps<SVGSVGElement>
  text: string
  key: string
  postId: number
}

const MenuDropdownItem: FC<IMenuDropdownItem> = ({text, icon, postId}) => (
  <li
    className={styles.menuItem} onClick={() => {
    console.log(postId)
  }}>
    <div className={styles.menuItemIcon}>{icon}</div>
    <button className={styles.menuItemText}>{text}</button>
  </li>
)

export default DropdownList;
