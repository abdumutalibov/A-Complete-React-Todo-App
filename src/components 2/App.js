import styles from '../styles/modules/app.module.scss';

import React from 'react';
import PageTitle from './PageTitle';
import AppHeader from './AppHeader';
import AppContent from './AppContent';

function App() {
  return (
  <div>
    <PageTitle>Todo List</PageTitle>
    <div className={styles.app__wrapper}>
      <AppHeader/>
      <AppContent/>
    </div>
  </div>
  );
}

export default App;
