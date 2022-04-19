import React, {FC} from "react";
import styles from "./Preview.module.css";

interface PreviewProps {
  img: string
}

const Preview: FC<PreviewProps> = ({img}) => {
  const isImage = img.slice(img.length - 3, img.length) == 'jpg'

  return (
    <div className={styles.Preview}>
      <img
        src={isImage ? img : 'https://srisovki.one/wp-content/uploads/2021/07/2dc87a4b6139f778befe1ee92a17ae6a.jpg'}
        alt="preview image"
      />
    </div>
  )

};

export default Preview;
