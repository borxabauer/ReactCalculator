import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [ firstNumber, setFirstNumber ] = useState("");
    const [ secondNumber, setSecondNumber ] = useState("");
  //`p`asociado a un nuevo hook state `result`
    const [result,setResult]=useState(null);
    
    function changeFirstNumberHandler (event) {
      setFirstNumber(parseFloat(event.target.value));
    }
    function changeSecondNumberHandler (event) {
      setSecondNumber(event.target.value);
    }



      console.log("firstNumber state:", firstNumber);
      console.log("secondNumber state:", secondNumber);
      console.log("result state:", result);

      //FUNCION SUMAR//
      function addHandler() {
        const result = firstNumber + secondNumber;
        setResult(result);
        setFirstNumber(result);
      }
  return (
    <>
      <h1>Calculadora</h1>
      <input type="text" value={firstNumber} onChange={changeFirstNumberHandler}/>
      <input type="text" value={secondNumber} onChange={changeSecondNumberHandler}/>
      <p>{result}</p>
      <button onClick={addHandler}>sumar</button>
    </>
  );
  }

export default App;
