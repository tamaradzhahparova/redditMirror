import React, { FC } from "react";
import styles from "./Controls.module.css";

interface ControlsProps {}

const Controls: FC<ControlsProps> = () => (
  <div className={styles.Controls}>
    <button>
      <svg
        width="19"
        height="10"
        viewBox="0 0 19 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
      </svg>
    </button>
    <span className={styles.count}>286</span>
    <button className={styles.buttonDown}>
      <svg
        width="19"
        height="10"
        viewBox="0 0 19 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
      </svg>
    </button>
  </div>
);

export default Controls;
