import { useEffect, useState } from 'react';
import './App.css';


function App() {
  //Siempre que declaro un state se almacenan estos 2 nombres: uno para almacenar y otro para cambiar
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState(null);
  const memory = useRef(0);

  const [resultsHistory, setResultsHistory] = useState([]);

  function changeFirstNumberHandler(event) {
    setFirstNumber(parseFloat(event.target.value));
  }

  function changeSecondNumberHandler(event) {
    setSecondNumber(parseFloat(event.target.value));
  }

  useEffect(
    () => {
      console.log("firstNumber state:", firstNumber);
      console.log("secondNumber state:", secondNumber);
    }
  )

  
  useEffect(
    ()=>{
      //Dispersión
        //setResultsHistory([...resultsHistory,result]);

        //La dispersión es este proceso:
        const resultsHistory2=Array.from(resultsHistory);
        resultsHistory2.push(result);
        setResultsHistory(resultsHistory2);
        
    },
    [result]
)


  function addHandler() {
    const result = firstNumber + secondNumber;
    setResult(result);
    setFirstNumber(result);
  }

  function restHandler() {
    const result = firstNumber - secondNumber;
    setResult(result);
    setFirstNumber(result);
  }

  function multiplyHandler() {
    const result = firstNumber * secondNumber;
    setResult(result);
    setFirstNumber(result);
  }

  function divideHandler() {
    const result = firstNumber / secondNumber;
    setResult(result);
    setFirstNumber(result);
  }

  function deleteHandler() {
    setFirstNumber(0);
    setSecondNumber(0);
    setResult(0);
  }

  function deleteHistory(){
    setResultsHistory([""]);
  }

  function MHandler() {
    memory.current = result;
    console.log(memory);
  }

  function MRHandler() {
    setFirstNumber(memory.current);
  }

  return (
    <>
      <h1>Calculadora</h1>
      <input type="text" value={firstNumber} onChange={changeFirstNumberHandler} /><br />
      <input type="text" value={secondNumber} onChange={changeSecondNumberHandler} />

      <p>{result}</p>
      <button onClick={addHandler}>sumar</button>
      <button onClick={restHandler}>restar</button>
      <button onClick={multiplyHandler}>multiplicar</button>
      <button onClick={divideHandler}>dividir</button>
      <button onClick={deleteHandler}>C</button>
      <button onClick={MHandler}>M+</button>
      <button onClick={MRHandler}>MR</button>
      <button onClick={deleteHistory}>Borrar historial</button>
      <h2>History</h2>
      <History results={resultsHistory}/>
    </>
  );
}

export default App;