import React from 'react'

const TaskState = ({ completed, dueDate }) => {
  const state =
    dueDate < Date.now() && !completed ? 'Past due' : 'Task completed'
  return <div>{state}</div>
}

export default TaskState
