import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';

import Header from 'src/view/components/Header';
import Footer from 'src/view/components/Footer';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <div className={'main-container'}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
