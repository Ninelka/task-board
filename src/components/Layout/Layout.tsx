import React from 'react';
import styles from './Layout.module.css';
import Column from '../Column/Column';
import initialData from '../../initial-data';

const Layout = () => {
  return (
    <main className={styles.container}>
      <Column title="Нужно" items={initialData.tasks} />
      <Column title="В работе" />
      <Column title="Выполнено" />
    </main>
  );
};

export default Layout;
