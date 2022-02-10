import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss'
import TodoModal from './TodoModal';
import { useState } from 'react';

function AppHeader() {
  const [modalOpen, setModalOpen] =useState(false)

  return (
    <div className={styles.appHeader}>
    <Button variant="primary" onClick={() => setModalOpen(true )} >
      Add Task

    </Button>
    
    <SelectButton
      id="status"
      >
      <option value="all">All</option>
      <option value="incomplete">Incomplete</option>
      <option value="complete">Completed</option>
    </SelectButton>
    <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
  </div>
  );
}

export default AppHeader;
