import React, { FC } from "react";
import styles from "./Preview.module.css";

interface PreviewProps {}

const Preview: FC<PreviewProps> = () => (
  <div className={styles.Preview}>
    <img
      src="https://cdn.dribbble.com/users/1714897/screenshots/17600514/media/1bd5b409eaad0ab542a1eeee4ec1b473.png"
      alt="preview image"
    />
  </div>
);

export default Preview;
