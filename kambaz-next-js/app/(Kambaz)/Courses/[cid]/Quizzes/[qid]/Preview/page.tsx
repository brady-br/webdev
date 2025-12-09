"use client"

import { useEffect, useState } from "react";
import { RootState } from "../../../../../store";
import * as client from "../../client";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { setQuizzes } from "../../reducer";
import { Button, FormCheck, FormControl } from "react-bootstrap";

export default function QuizPreview() {
  const { cid, qid }: {cid: string, qid: string} = useParams();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";
  const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [quiz, setQuiz] = useState({_id: qid, name: `Q${quizzes.length + 1}`, course: cid, description: "", published: false,
        available: "2025-12-07", due: "2025-12-14", until: "2025-12-21",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        questions: Array<any>(),
        quizType: "GRADED_QUIZ", assignmentGroup: "QUIZZES",
        shuffle: true, timeLimit: 20, maxAttempts: 1, showCorrectAnswers: "IMMEDIATELY",
        accessCode: "", oneQuestionAtATime: true, webcamRequired: false,
        lockQuestionsAfterAnswering: false});
  const [timeStarted, setTimeStarted] = useState<Date | null>(null);
  const [qChoices, setQChoices] = useState<string[]>([]);
  useEffect(() => {
    const fetchQuiz = async () => {
      const quizzes = await client.findQuizzesForCourse(cid);
      setQuizzes(quizzes);
      const thisQuiz = quizzes.find((quiz: { _id: string }) => quiz._id === qid);
      if (thisQuiz) {
        setQuiz(thisQuiz);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setQChoices(thisQuiz.questions.map((q: any) => ""))
      }
    }
    fetchQuiz();
    setTimeStarted(new Date());
    }, [qid]);
  const [questionNum, setQuestionNum] = useState(0);
  return (
    <div className="me-3">
      <h1>{quiz.name}</h1>
      Started: {timeStarted?.toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"})}
      <h1>Quiz Instructions</h1>
      {quiz.description}
      <hr/>
      <div style={{border: "0.5px solid black"}} className="p-0 m-3">
        <div className="flex-fill bg-secondary m-0 p-2">
          <div className="float-end">
            { quiz.questions[questionNum]?.points }
            pts
          </div>
          <h5>{quiz.questions[questionNum]?.title}</h5>
        </div>
        <div className="p-3">
          { quiz.questions[questionNum]?.question }
          { quiz.questions[questionNum]?.questionType === "MULTIPLE_CHOICE" &&
            quiz.questions[questionNum]?.choices.map((choice: {choice: string}, i: number) => (
              <div key={`${questionNum}-${i}`}>
                <hr/>
                <FormCheck label={choice.choice} name={`mc-group-${questionNum}`} type="radio"
                  checked={qChoices[questionNum] === choice.choice}
                  onChange={(e) => {if (e.target.checked) setQChoices(qChoices.map((c, index) =>
                    index === questionNum ? choice.choice : c));}}/>
              </div>)) }
          { quiz.questions[questionNum]?.questionType === "TRUE_FALSE" && (
            <div>
              <hr/>
              <FormCheck label="True" name={`tf-group-${questionNum}`} type="radio"
                checked={qChoices[questionNum] === "True"}
                onChange={(e) => {if (e.target.checked) setQChoices(qChoices.map((c, index) =>
                  index === questionNum ? "True" : c))}}/>
              <hr/>
              <FormCheck label="False" name={`tf-group-${questionNum}`} type="radio"
                checked={qChoices[questionNum] === "False"}
                onChange={(e) => {if (e.target.checked) setQChoices(qChoices.map((c, index) =>
                  index === questionNum ? "False" : c))}}/>
            </div>
          )}
          { quiz.questions[questionNum]?.questionType === "FILL_IN_THE_BLANK" && (
            <div>
              <hr/>
              <FormControl value={qChoices[questionNum]} onChange={(e) =>
                setQChoices(qChoices.map((c, index) => index === questionNum ? e.target.value : c))}/>
            </div>
          )}
        </div>
      </div>
      <div className="clearfix mb-2">
        { questionNum < quiz.questions.length - 1 && (
          <Button variant="secondary" className="float-end me-3"
            onClick={() => setQuestionNum(questionNum + 1)}>Next Question</Button>
        ) }
        { questionNum > 0 && !quiz.lockQuestionsAfterAnswering && (
          <Button variant="secondary" className="ms-3"
            onClick={() => setQuestionNum(questionNum - 1)}>Previous Question</Button>
        ) }
      </div>
      <Button variant="secondary" className="float-end me-3" href={`/Courses/${cid}/Quizzes/${qid}`}>
        Submit Quiz
      </Button>
      { isFaculty && (
        <Button variant="secondary" className="ms-3" href={`/Courses/${cid}/Quizzes/${qid}/Editor`}>
          Edit
        </Button>
      )}
    </div>
  );
}
