import React, { FC } from "react";
import styles from "./Card.module.css";
import Controls from "./Controls/Controls";
import Preview from "./Preview/Preview";
import TextContent from "./TextContent/TextContent";
import MenuButton from "./Menu/MenuButton";
import Dropdown from "../../Dropdown/Dropdown";
import DropdownList from "./DropdownList/DropdownList";
import {IPostData} from "../../../hooks/usePostsData";

interface CardProps {
  post: IPostData
}

const Card: FC<CardProps> = ({post}) => (
  <li className={styles.Card}>
    <Preview img={post.photoUrl}/>
    <TextContent title={post.title} name={post.author} created={post.created}/>
    <div className={styles.cardOptions}>
      <div className={styles.dropdownMenuWrapper}>
        <Dropdown button={ <MenuButton />}>
          <DropdownList postId={1234} />
        </Dropdown>
      </div>
      <Controls ups={post.ups} comments={post.comments}/>
    </div>
  </li>
);

export default Card;
