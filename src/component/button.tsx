// button

import React, { Dispatch, SetStateAction, useState } from "react";
import Quiz from "./Quizes";

interface Props {
  answerList: any;
  btnType: string;
  miscClass: string;
  correctAnswer: any;
  points: number;
  setPoints: Dispatch<SetStateAction<number>>;
}

function Button({
  answerList,
  btnType,
  miscClass,
  correctAnswer,
  points,
  setPoints,
}: Props) {
  let btnClasses = btnType + " " + miscClass;
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const answerCheck = (answer: string) => {
    answer === ""
      ? setPoints(0)
      : answer === correctAnswer
      ? setPoints(points + 1)
      : answer !== correctAnswer
      ? setPoints(points - 1)
      : 0;
  };

  const answers = answerList.map((item: any) => (
    <button
      key={item}
      className={btnClasses}
      onClick={() => {
        setSelectedAnswer(item);
        answerCheck(item);
      }}
    >
      {item}
    </button>
  ));
  const answerResponse = () =>
    selectedAnswer === "" ? (
      <p></p>
    ) : selectedAnswer === correctAnswer ? (
      <p className="text-success">True!</p>
    ) : (
      <p className="text-danger">False!</p>
    );
  const conLog = () =>
    console.log(points + " " + selectedAnswer + "|" + correctAnswer);

  return (
    <>
      {answers}
      {answerResponse()}
      <button className="btn btn-primary" onClick={conLog}>
        console
      </button>
    </>
  );
}

export default Button;