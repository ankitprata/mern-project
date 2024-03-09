import React ,{useState} from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  function inc(){
    setCount(count+1);
    console.log({count});
  }
  function decr(){
    setCount(count-1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={decr}>-</button>
    </div>
  )
}

export default App