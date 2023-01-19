import React from 'react';
import { ILayoutProps } from './interface';
import styles from './layout.module.css';

export default function Layout({ children }: ILayoutProps): JSX.Element {
  return (
    <main>
      <div className={styles.container}>
        {children}
      </div>
    </main>
  );
}
