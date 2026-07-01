import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'


function App() {
  const [task, settask] = useState("");
  const [todo,addtodo]=useState([]);
  function adder(task){
    if (task.trim()==="") return ;
    addtodo([...todo,task]);
    
    settask("");
  }


  return (
    <><div id='body'></div>
      <h1>todo app</h1>
      <input type="text" placeholder='type task' value={task} onChange={(e)=>settask(e.target.value)} onKeyDown={(e)=>{if(e.key==="Enter")adder(task)}} />
      <button onClick={()=>{adder(task)}}>add</button>
      <ul >
      <h2>{todo.map((todo,index)=>{
       return <li key={index} className='list'>{todo}</li>
      })}</h2></ul>
    </>
  )
}

export default App
