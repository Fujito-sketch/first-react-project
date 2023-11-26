/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
*/

//import ListGroup from './component/ListGroup';
import { useState } from "react";
import Alert from "./component/alert";
import Button from "./component/button";
import Quizes from "./component/Quizes";
import SubmitButton from "./component/SubmitButton";

function App(){

/*

  let items = [
    "Australia",
    "America",
    "Asia",
    "Africa"
]

  const handleSelectItem = (item : string) => {console.log(item)}

  return <>
    <ListGroup items={items} heading='Continents' onSelectItem={handleSelectItem} />
        </>
*/
  const [points, setPoints] = useState(0);

  const question = "Intruder Alert! A RED spy is in The base!"
  const question2 = "Protect the briefcase!";
  const question3 = "Yo! I need some help here!";
  const answerList = ["A RED spy is in the base!?", "Ok and?", "I don't care"];
  const btnTypes = "btn btn-secondary";
  const miscClasses = "me-1";
  const correctAnswer = "A RED spy is in the base!?";
  
  const answerList2 = ["I'd rather sleep", "We need to protect the briefcase!", "Can't you see I'm busy here?"];
  const correctAnswer2 = "We need to protect the briefcase!";

  const answerList3 = ["Do you?", "Let me handle this", "Stand back, son!"];
  const correctAnswer3 = "Stand back, son!";

  let questionMaster = [question, question2, question3];
  let answerListMaster = [answerList, answerList2, answerList3];
  let correctAnswerMaster = [correctAnswer, correctAnswer2, correctAnswer3];

  let alertText = "Intruder Alert!";
  return <>

    <Alert>
      <b>Intruder Alert!</b><br />
      <b>A RED spy</b> is in <b>The base!</b><br />
      <Button
       answerList={answerList} 
       btnType={btnTypes} 
       miscClass={miscClasses} 
       correctAnswer={correctAnswer}
       points={points}
       setPoints={setPoints}></Button>
      <b>HUT HUT HUT HUT HUT!</b><br />
      <b>Protect the briefcase!</b><br />
      <Button 
      answerList={answerList2}
      btnType={btnTypes}
      miscClass={miscClasses}
      correctAnswer={correctAnswer2}
      points={points}
      setPoints={setPoints}></Button>
    </Alert>

    <Alert>
      <Quizes 
        btnTypes={btnTypes} 
        miscClasses={miscClasses} 
        questionMaster={questionMaster} 
        answerListMaster={answerListMaster} 
        correctAnswerMaster={correctAnswerMaster} 
        points={points} 
        setPoints={setPoints}></Quizes>
    </Alert>

        </>
}

export default App;