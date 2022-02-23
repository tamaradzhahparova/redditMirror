import React, { FC } from 'react';
import styles from './Content.module.css';

interface ContentProps {
  children?: React.ReactNode
}

const Content: FC<ContentProps> = ({children}) => (
  <main className={styles.Content}>
    {children}
  </main>
);

export default Content;
