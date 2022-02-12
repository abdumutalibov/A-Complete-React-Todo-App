import React, { useState, useEffect } from 'react'
import styles from '../styles/modules/modal.module.scss';
import {MdOutlineClose} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../slices/todoSlice';
import {v4 as uuid} from 'uuid'
import toast from 'react-hot-toast';
import Button from './Button'
import { AnimatePresence, motion } from 'framer-motion';

const dropIn = {
    hidden:{
        opacity:0,
        transform: 'scale()0.9',
    },
    visible:{
        transform: 'scale(1)',
        opacity: 1,
        transform: {
            duration: 0.1,
            type: 'spring',
            damping:25,
            stiffness:500,
        },
    },
    exit:{
        transform:'scale(0.9)',
        opacity: 0,
    }
}


function TodoModal({type, modalOpen, setModalOpen, todo}) {

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState("incomplete")
    const dispatch = useDispatch()

    useEffect(()=>{
        if(type === 'update' &&  todo){
            setTitle(todo.title);
            setStatus(todo.status);
        }else{
            setTitle('')
            setStatus('incomplete')
        }
    },[type, todo,modalOpen])

    const handleSubmit =(e)=>{
        e.preventDefault();
        if (title === ''){
            toast.error('Please enter a title');
            return;
        }
        if(title && status){
            if(type === 'add'){
                 dispatch(
                addTodo({
              id:uuid(),
              title,
              status,
              time: new Date().toLocaleString(),
            })
            ); 
            
            toast.success('Task Added Successfully ');
        };
        if(type === 'update'){
            if(todo.title !== title || todo.status !== status){
                dispatch(
                    updateTodo({
                    ...todo,
                    title,
                    status,
                })
                );
                toast.success('Updated Succefully')
                
            }else{
                toast.error('No Changes Modal')
                return;
            }
            
        }
        setModalOpen(false)
}
    };
  
  return (
      <AnimatePresence>

     { modalOpen && (

          <motion.div className={styles.wrapper} 
          initial={{opacity:0}}
          animate={{opacity: 1}} 
          exit={{opacity:0}}
          >
        <motion.div className={styles.container} 
        variant={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
        >
            <motion.div className={styles.closeButton}
             onKeyDown={() => setModalOpen(false)}
             onClick={() => setModalOpen(false)}
             tabIndex={0}
             role="button"
             initial={{ top:40, opacity:0}}
             animate={{ top:-10, opacity:1}}
             exit={{ top:40, opacity:0}}
            >
<MdOutlineClose/>
            </motion.div>
<form className={styles.form} onSubmit={(e)=>handleSubmit(e)}>
    <h1 className={styles.formTitle}>
        {type === 'update' ? 'Update' :'Add'}</h1>
    <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
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
                  {type === 'add' ? 'Add Task' : 'Update Task'}
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
        </motion.div>
        </motion.div>
      )}
             </AnimatePresence>
      )
}

export default TodoModal
