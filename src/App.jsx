

import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'

function App() {

  function handleClick(){
    alert('i am clicked')
  }


  return (
    <>
     
      <h3>React</h3>
      <Batsman></Batsman>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick}>Click me2</button>
      <Counter></Counter>

     
    </>
  )
}

export default App
