import React, {FC} from "react";
import styles from "./TextContent.module.css";
import CardMetaData from './CardMetaData/CardMetaData'

interface TextContentProps {
  title: string
  name: string
  created: number
}

const TextContent: FC<TextContentProps> = ({title, name, created}) => {
  return (
    <div className={styles.TextContent}>
      <h2 className={styles.title}>{title}</h2>
      <CardMetaData name={name} created={created}/>
    </div>
  )

};

export default TextContent;
