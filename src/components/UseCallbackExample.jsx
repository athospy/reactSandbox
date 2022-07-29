import React, {useState, useCallback} from 'react'

function UseCallbackExample() {
  const [task, setTask] = useState([])

  const addTask = useCallback(()=>{
    setTask((prevState)=> [...prevState, 'somre task'])
  }, [setTask])

  return (
    <div>
      <Button addTask={addTask} />
      {task.map((task, index)=>(
        <p key={index}>{task}</p>
      ))}
    </div>
  )
}

const Button = React.memo(({addTask}) =>{
  console.log('button rendered')
  return <div>
    <button className='btn btn-primary' onClick={addTask}>add</button>
  </div>
})

export default UseCallbackExample
