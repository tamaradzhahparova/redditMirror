import React, { FC } from "react";
import styles from "./Card.module.css";
import Controls from "./Controls/Controls";
import Preview from "./Preview/Preview";
import TextContent from "./TextContent/TextContent";
import MenuButton from "./Menu/MenuButton";
import Dropdown from "../../Dropdown/Dropdown";
import DropdownList from "./DropdownList/DropdownList";

interface CardProps {}

const Card: FC<CardProps> = () => (
  <li className={styles.Card}>
    <Preview />
    <TextContent />
    <div className={styles.cardOptions}>
      <Dropdown button={ <MenuButton />}>
        <DropdownList />
      </Dropdown>
      <Controls />
    </div>
  </li>
);

export default Card;
