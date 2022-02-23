import React, { FC } from 'react';
import styles from './TextContent.module.css';

interface TextContentProps {}

const TextContent: FC<TextContentProps> = () => (
  <div className={styles.TextContent}>
    TextContent Component
  </div>
);

export default TextContent;
