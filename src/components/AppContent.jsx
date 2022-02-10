import React from 'react'
import { useSelector } from 'react-redux'

function AppContent() {
  const todoList = useSelector((state) => state.todo.toodoList);
const sortedTodoList =[...todoList];
sortedTodoList.sort((a,b)=> new Date(b.time) - new Date(a.time));
console.log(todoList);
  return (
    <div>
      {sortedTodoList && sortedTodoList.length > 0 ? 
        'todo will be here' : 'no todo found'
      }
    </div>
  )
}

export default AppContent