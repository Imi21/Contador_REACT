import React, {useState} from 'react'

const Counter = ({valorInicial}) => {

const [counter, setCounter] = useState (valorInicial)
const [contador] = useState ("MARCADOR")


const reduce = () => {
    setCounter (counter -1);
 }
const masTres = () => {
    setCounter(counter + 3)
 }
const masDos = () => {
    setCounter(counter + 2)
 } 
const incrementar = () => {
   setCounter(counter + 1)
}

  return (
  
   <div>
    <h2>{contador}</h2>
    <span>{counter}</span>
    <br />
    <button onClick={incrementar}>Incrementa!</button>
    <button onClick={masDos}>+2!</button>
    <button onClick={masTres}>+3!</button>
    <button onClick={reduce}>-1!</button>    
</div>

  )
}


export default Counter