// Quizez
import { Dispatch, SetStateAction } from "react";
import Button from "./button";
import SubmitButton from "./SubmitButton";

interface Props {
  questionMaster: string[];
  answerListMaster: string[][];
  correctAnswerMaster: string[];
  btnTypes: string;
  miscClasses: string;
  points: number;
  setPoints: Dispatch<SetStateAction<number>>;
}

function Quizes({
  questionMaster,
  answerListMaster,
  btnTypes,
  miscClasses,
  correctAnswerMaster,
  points,
  setPoints
}: Props) {
  const Quiz = () => {
    let quizList = [];
    for (
      let i = 0;
      i < questionMaster.length &&
      answerListMaster.length &&
      correctAnswerMaster.length;
      i++
    ) {
      let answers = answerListMaster[i];
      let questions = questionMaster[i];
      let correctAnswers = correctAnswerMaster[i];
      quizList.push(
        <>
          <b key={i + 10}>{questions}</b> <br />
          <Button
            key={i}
            btnType={btnTypes}
            miscClass={miscClasses}
            correctAnswer={correctAnswers}
            answerList={answers}
            points={points}
            setPoints={setPoints}
          ></Button>
        </>
      );
    }
    return quizList;
  };

  return <>{Quiz()}</>;
}

export default Quizes;