"use client"
import { RootState } from "../../../../../store";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as client from "../../client"
import { setQuizzes } from "../../reducer";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import DetailsEditor from "./Details";
import QuestionsEditor from "./Questions";

export default function QuizEditor() {
  const { cid, qid }: {cid: string, qid: string} = useParams();
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
  const [isNew, setIsNew] = useState(true);
  const [questionsSelected, setQuestionsSelected] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createQuiz = async (quiz: any) => {
    const newQuiz = await client.createQuizForCourse(cid, quiz);
    dispatch(setQuizzes([...quizzes, newQuiz]))
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateQuiz = async (quiz: any) => {
    const updatedQuiz = await client.updateQuiz(qid, quiz);
    dispatch(setQuizzes(quizzes.map((q) => q._id === quiz._id ? quiz : q)));
  }
  useEffect(() => {
  const fetchQuiz = async () => {
    const quizzes = await client.findQuizzesForCourse(cid);
    setQuizzes(quizzes);
    const quiz = quizzes.find((quiz: { _id: string }) => quiz._id === qid);
    if (quiz) {
      setQuiz(quiz);
      setIsNew(false);
    }
  }
  fetchQuiz();}, [qid]);
  const onSave = isNew ? createQuiz : updateQuiz;
  return (
    <div className="me-3 mb-2 clearfix">
      <h5 className="text-end">Points:{" "}
        {quiz.questions !== undefined && (quiz.questions as {points: number}[]).reduce<number>(
            ( previousValue: number, currentValue: {points: number}, currentIndex, array ) =>
              previousValue + currentValue.points, 0)}</h5>
      <hr/>
      <ListGroup horizontal className="rounded-0 mb-0">
        <ListGroupItem as={Button}
            className={`${questionsSelected ? "text-dark border-0" : "text-danger border-1 border-bottom-0"} rounded-0`}
            onClick={() => setQuestionsSelected(false)}>
          Details
        </ListGroupItem>
        <ListGroupItem as={Button}
            className={`${questionsSelected ? "text-danger border-1 border-bottom-0" : "text-dark border-0"} rounded-0`}
            onClick={() => setQuestionsSelected(true)}>
          Questions
        </ListGroupItem>
      </ListGroup>
      <hr className="mt-0"/>
      { questionsSelected ? (
        <QuestionsEditor questions={quiz.questions} updateQuestions={(qs) => setQuiz({...quiz, questions: qs})}/>) : (
        <DetailsEditor quiz={quiz} updateQuiz={setQuiz}/>) }
      <hr/>
      <Button variant="danger" size="lg" className="float-end"
        onClick={async (e) => {
          e.preventDefault();
          await onSave(quiz);
          router.push(`/Courses/${cid}/Quizzes/${qid}`);
        }}>Save</Button>
      <Button variant="danger" size="lg" className="float-end me-2"
        onClick={async (e) => {
          e.preventDefault();
          const newQuiz = {...quiz, published: true}
          setQuiz(newQuiz);
          await onSave(newQuiz);
          router.push(`/Courses/${cid}/Quizzes`);
        }}>Save and Publish</Button>
      <Button variant="secondary" size="lg" className="float-end me-2" href={`/Courses/${cid}/Quizzes`}>Cancel</Button>
    </div>
  );
}
