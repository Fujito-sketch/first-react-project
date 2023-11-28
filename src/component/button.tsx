import React, { Dispatch, SetStateAction, useState } from 'react'
import Quiz from './Quizes';

interface Props {
    answerList: string[];
    btnType: string;
    miscClass: string;
    correctAnswer: any;
    points : number;
    setPoints : Dispatch<SetStateAction<number>>
}


let answerPocket : Array<string> = []

function Button({answerList, btnType, miscClass, correctAnswer, points, setPoints}: Props){
    let btnClasses = btnType + " " + miscClass
    const [pointBucket, setPointBucket] = useState(1)
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const answerCheck = (answer : string) => {if(answer === ""){setPoints(0)}else if(answer === correctAnswer){setPoints(points + 1); setPointBucket(0)}else if(answer !== correctAnswer && answerPocket.length === 1){setPoints(points * 1);}else if(answer !== correctAnswer && answerPocket.length < 1){setPointBucket(pointBucket + points); setPoints(points - 1)}};
    const pushThings = (answer : string) => {if(answerPocket.length >= 9){answerPocket.splice(0, 1); answerPocket.push(answer)}else{answerPocket.push(answer)}}
    const checkDoubleAnswer = (answer : string) => answerPocket.length === 0 ? "Nothing Detected" : answerPocket.filter((thing) => thing == answer).length >= 2 ? setPoints(points * 1) : answerPocket[1] !== answerPocket[0] ? console.log("No Double Answer Detected") : "";
    const filterPocket = () => {let checkList = []; console.log(answerList);if(answerPocket.length > 3){console.log("check triggered");for(let x = 0; x < answerList.length; x++){console.log(answerList[x] + " " + answerPocket[x]);let boo; boo = answerList.includes(answerPocket[x]); checkList.push(boo);if(checkList.filter((bool) => bool === false).length > 0){answerPocket = [answerPocket[answerPocket.length - 1]]}}}}
    const conLog = () => console.log("points : " + points + " | Selected Answer : " + selectedAnswer + " | Correct Answer : " + correctAnswer + " | Answer Pocket : " + answerPocket + " | Point Bucket " + pointBucket);

    const answers = answerList.map((item: any) => <button 
    key={item} 
    className={btnClasses}
    onClick={() => {setSelectedAnswer(item); answerCheck(item); pushThings(item); checkDoubleAnswer(item); filterPocket()}}
    >{item}</button>)
    const answerResponse = () => selectedAnswer === "" ? <p></p> :  selectedAnswer === correctAnswer ? <p className='text-success'>True!</p> : <p className='text-danger'>False!</p>;

    return (
        <>
            {answers}
            {answerResponse()}
            <button className='btn btn-primary' onClick={conLog}>show</button>
        </>
    )
}

export default Button