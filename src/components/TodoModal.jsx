import React, { useState } from 'react'
import styles from '../styles/modules/modal.module.scss';
import {MdOutlineClose} from 'react-icons/md'
import Button from './Button'
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoSlice';
import {v4 as uuid} from 'uuid'
import toast from 'react-hot-toast';
function TodoModal({modalOpen, setModalOpen}) {

    const [title , setTitle] = useState('');
    const [status, setStatus] = useState("incomplete")
    const dispatch = useDispatch()

    const handleSubmit =(e)=>{
        console.log(title, status);
        e.preventDefault();
        if(title && status){
            dispatch(
                addTodo({
              id:uuid(),
              title,
              status,
              time: new Date().toLocaleDateString(),
            })
            );
            toast.success('Task Added Successfully ');
setModalOpen(false)
}else{
    toast.error("Title shouldn't be empty")
}
    };
  
  return (
      modalOpen && (

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
<form className={styles.form} onSubmit={(e)=>handleSubmit(e)}>
    <h1 className={styles.formTitle}>Add Task</h1>
    <label htmlFor="title">
        Title
        <input type="text" id='title' value={title}
        onChange={(e)=> setTitle(e.target.value)} />
    </label>
    <label htmlFor="title">
    States
 <select
  name='status' id='status'
 value={status}
 onChange={(e)=> setStatus(e.target.value)}
 >
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
        variant='secondary'
        onKeyDown={() => setModalOpen(false)}
        onClick={() => setModalOpen(false)}
         >
                  Cancel
                </Button>
    </div>
</form>
        </div>
        </div>
      )
      )
}

export default TodoModal
