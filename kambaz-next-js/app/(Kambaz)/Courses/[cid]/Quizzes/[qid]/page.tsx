"use client"
import { RootState } from "../../../../store";
import * as client from "../client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { setQuizzes } from "../reducer";

export default function QuizDetails() {
  const { cid, qid }: {cid: string, qid: string} = useParams();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const isFaculty = currentUser !== null && currentUser.role === "FACULTY";
  const isStudent = currentUser !== null && currentUser.role === "STUDENT";
  const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [quiz, setQuiz] = useState<any>({});
  const fetchQuiz = async () => {
    const quizzes = await client.findQuizzesForCourse(cid);
    setQuizzes(quizzes);
    const quiz = quizzes.find((quiz: { _id: string }) => quiz._id === qid);
    if (quiz) {
      setQuiz(quiz);
    } else {
      setQuiz({_id: qid, name: `Q${quizzes.length + 1}`, course: cid, published: false,
        available: "2025-12-07", due: "2025-12-14", until: "2025-12-21",
        questions: [],
        quizType: "GRADED_QUIZ", assignmentGroup: "QUIZZES",
        shuffle: true, timeLimit: 20, maxAttempts: 1, showCorrectAnswers: "IMMEDIATELY",
        accessCode: "", oneQuestionAtATime: true, webcamRequired: false,
        lockQuestionsAfterAnswering: false})
    }
  }
  const quizTypes = {
    "GRADED_QUIZ": "Graded Quiz",
    "PRACTICE_QUIZ": "Practice Quiz",
    "GRADED_SURVEY": "Graded Survey",
    "UNGRADED_SURVEY": "Ungraded Survey",
  }
  const correctAnswerTypes = {
    "IMMEDIATELY": "Immediately",
    "DUE": "When Due",
    "UNTIL": "When Closed"
  }
  useEffect(() => {fetchQuiz();}, [qid]);
  return (
    <div className="me-3">
      {isFaculty && (<div className="d-flex justify-content-center flex-fill mb-2">
        <Button size="lg" className="me-2 bg-secondary text-dark border-dark"
            href={`/Courses/${cid}/Quizzes/${qid}/Preview`}>
          Preview
        </Button>
        <Button size="lg" className="bg-secondary text-dark border-dark"
            href={`/Courses/${cid}/Quizzes/${qid}/Editor`}>
          <FaPencil className="me-1" />
          Edit
        </Button>
      </div>)}
      <div style={{border: "1px dashed gray"}} className="flex-fill p-2 mb-2">
        <h2>{quiz.name}</h2>
        <br/>
        <Row>
          <Col xs={4} className="text-end">
            <b>Quiz Type</b>
          </Col>
          <Col>
            {quizTypes[quiz.quizType as "GRADED_QUIZ" | "PRACTICE_QUIZ" | "GRADED_SURVEY" | "UNGRADED_SURVEY"]}
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="text-end">
            <b>Points</b>
          </Col>
          <Col>
            {quiz.questions !== undefined && (quiz.questions as {points: number}[]).reduce<number>(
                ( previousValue: number, currentValue: {points: number}, currentIndex, array ) =>
                  previousValue + currentValue.points, 0) }
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="text-end">
            <b>Assignment Group</b>
          </Col>
          <Col>
            {quiz.assignmentGroup}
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="text-end">
            <b>Shuffle Answers</b>
          </Col>
          <Col>
            {quiz.shuffle ? "Yes" : "No"}
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="text-end">
            <b>Time Limit</b>
          </Col>
          <Col>
            {`${quiz.timeLimit} Minutes`}
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="text-end">
            <b>Multiple Attempts</b>
          </Col>
          <Col>
            {quiz.maxAttempts > 1 ? `Yes (${quiz.maxAttempts})` : "No"}
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="text-end">
            <b>Show Correct Answers</b>
          </Col>
          <Col>
            {correctAnswerTypes[quiz.showCorrectAnswers as "IMMEDIATELY" | "DUE" | "UNTIL"]}
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="text-end">
            <b>Access Code</b>
          </Col>
          <Col>
            {quiz.accessCode ? quiz.accessCode : (<i>N/A</i>)}
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="text-end">
            <b>One Question at a Time</b>
          </Col>
          <Col>
            {quiz.oneQuestionAtATime ? "Yes" : "No"}
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="text-end">
            <b>Webcam Required</b>
          </Col>
          <Col>
            {quiz.webcamRequired ? "Yes" : "No"}
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="text-end">
            <b>Lock Questions After Answering</b>
          </Col>
          <Col>
            {quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={3}>
            <b>Due</b>
          </Col>
          <Col xs={3}>
            <b>For</b>
          </Col>
          <Col xs={3}>
            <b>Available from</b>
          </Col>
          <Col xs={3}>
            <b>Until</b>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col xs={3}>
            {new Date(quiz.due).toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
            })}
          </Col>
          <Col xs={3}>
            Everyone
          </Col>
          <Col xs={3}>
            {new Date(quiz.available).toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
            })}
          </Col>
          <Col xs={3}>
            {new Date(quiz.until).toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
            })}
          </Col>
        </Row>
        <hr/>
      </div>
      {isStudent && (
        <Button variant="danger" className="float-end">
          Take Quiz
        </Button>
      )}
    </div>
  )
}