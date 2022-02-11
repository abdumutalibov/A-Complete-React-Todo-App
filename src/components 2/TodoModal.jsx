import React, { useState } from 'react'
import styles from '../styles/modules/modal.module.scss';
import {MdOutlineClose} from 'react-icons/md'
import Button from './Button'
function TodoModal({modalOpen, setModalOpen}) {
  
  return (
      <div>
      {modalOpen && (

          <div className={styles.wrapper} >
        <div className={styles.container}>
            <div className={styles.closeButton}
             onKeyDown={() => setModalOpen(false)}
             onClick={() => setModalOpen(false)}
             role="button"
             tabIndex={0}

            >
<MdOutlineClose/>
            </div>
<form className={styles.form}>
    <h1 className={styles.formTitle}>Add Task</h1>
    <label htmlFor="title">
        Title
        <input type="text" id='title'/>
    </label>
    <label htmlFor="title">
    States
 <select name='status' id='status'>
     <option value="incomplete">Incomplete</option>
    <option value="complete">Complete</option>
 </select>

    </label>
    <div className={styles.buttonContainer}>
    <Button type="submit" variant="primary">
            Add Task
        </Button>
        <Button
        type='button'
        onKeyDown={() => setModalOpen(false)}
        onClick={() => setModalOpen(false)}
        role="button"
        tabIndex={0}
         >
                  Cancel
                </Button>
    </div>
</form>
        </div>
        </div>
      )}
      </div>
      )
}

export default TodoModal
