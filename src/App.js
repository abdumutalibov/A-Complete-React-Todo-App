import styles from './styles/modules/app.module.scss';

import React from 'react';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

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
