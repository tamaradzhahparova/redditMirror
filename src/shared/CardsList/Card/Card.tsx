import React, {FC, useState} from "react";
import styles from "./Card.module.css";
import Controls from "./Controls/Controls";
import Preview from "./Preview/Preview";
import TextContent from "./TextContent/TextContent";
import MenuButton from "./Menu/MenuButton";
import Dropdown from "../../Dropdown/Dropdown";
import DropdownList from "./DropdownList/DropdownList";
import {IPostData} from "../../../redux/postsSlice";

interface CardProps {
  post: IPostData
}

export interface IOffset {
  x: number
  y: number
}

const Card: FC<CardProps> = ({post}) => {
  const [offset, setOffset] = useState<IOffset>({x: 0, y: 0})

  const setOffsetCallback = (value: IOffset) => {
    setOffset(value)
  }
  
  const dropdownStyle = () => {
    if (window.screen.width <= 1100) {
      return {
        top: `${offset.y}px`,
        right: '10px'
      }
    }
    return {
      top: `${offset.y}px`,
      left: `${offset.x}px`
    }
  }

  return (
    <li className={styles.Card}>
      <Preview img={post.photoUrl}/>
      <TextContent postId={post.id} title={post.title} name={post.author} created={post.created} iconImg={post.icon_img} />
      <div className={styles.cardOptions}>
        <div className={styles.dropdownMenuWrapper}>
          <Dropdown button={<MenuButton/>} setOffsetCallback={setOffsetCallback} >
            <DropdownList postId={1234} style={dropdownStyle()}/>
          </Dropdown>
        </div>
        <Controls ups={post.ups} comments={post.comments}/>
      </div>
    </li>
  )

};

export default Card;
