import { useState } from 'react' // isee se ate hai hooks {useState ek hook hai}
// babble kardeta ise automatically inject under the hook jakar 
// {hook } aise lata import {hook} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {


  let [counter, setCounter] = useState(0);

  const addValue = ()=> {
    if(counter  + 1> 20) {
      setCounter(counter)
    }
    else setCounter(counter + 1);
    // counter  = counter + 1;
    // console.log(counter) // ye direct update nahi hogi ui mein
    //kyunki ui react control karti hai
    // iske updation ke liye react ne special methods diye called react hookss
  } 

  const removeValue = ()=> {
    if(counter - 1 < 0) {
      setCounter(counter);
    }
    else setCounter(counter-1);
  }

  return (
    <>
    <h1>Day-3</h1>
    <h2>Counter value: {counter}</h2>
  
    <button
    onClick={addValue}
    >Add Value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >Remove Value {counter} </button>

    </>
  )
}

export default App
