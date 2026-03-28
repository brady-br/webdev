"use client"
import { FormControl, Button, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { FaEllipsisVertical, FaPlus } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import { FaCheckCircle, FaRocket } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { setQuizzes } from "./reducer";
import * as client from "./client";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Quizzes() {
  const { cid } : { cid: string } = useParams();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const isFaculty = currentUser !== null && currentUser.role === "FACULTY";
  const isStudent = currentUser !== null && currentUser.role === "STUDENT";
  const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  // suppressHydrationWarning
  const newQuizId = uuidv4();
  const [showingQuiz, setShowingQuiz] = useState("");
  const closeModal = () => setShowingQuiz("");
  const fetchQuizzes = async () => {
    let quizzes = await client.findQuizzesForCourse(cid);
    if (isStudent)
      quizzes = quizzes.filter((quiz: { published: boolean; }) => quiz.published);
    dispatch(setQuizzes(quizzes));
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateQuiz = async (quizId: string, updates: any) => {
    await client.updateQuiz(quizId, updates);
    await fetchQuizzes();
  }

  useEffect(() => {fetchQuizzes();}, [cid]);
  return (
    <div className="me-3">
      { isFaculty && (<div>
        <Button variant="secondary" className="float-end">
          <FaEllipsisVertical />
        </Button>
        <Button variant="danger" className="me-1 float-end"
            href={`/Courses/${cid}/Quizzes/${newQuizId}`}
            suppressHydrationWarning>
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> Quiz
        </Button></div>) }
      <FormControl placeholder="Search for Quiz" className="w-50" />
      <hr />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <GoTriangleDown className="me-2 fs-3" />
            Quizzes
          </div>
          <ListGroup className="rounded-0">
            { quizzes.map((quiz) => {
              const now = Date.now();
              const available = new Date(quiz.available);
              const until = new Date(quiz.until);
              const due = new Date(quiz.due);
              const closed = now >= until.getTime();
              const open = !closed && now >= available.getTime();
              return (
                <ListGroupItem key={quiz._id} className="wd-quiz p-3 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                  <FaRocket className="text-success me-3" />
                  <div>
                    <h4><a href={`/Courses/${cid}/Quizzes/${quiz._id}`}>{quiz.name}</a></h4>
                    { closed && (<b>Closed </b>) }
                    { open && (<b>Available </b>) }
                    { !closed && !open && (<span>
                      <b>Not available until </b>
                      { available.toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit"
                      }) + " " }
                    </span>) }
                    | <b>Due </b>
                    { due.toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit"
                    }) + " " }
                    | { quiz.questions.reduce<number>(
                          ( previousValue, currentValue, currentIndex, array ) =>
                              previousValue + currentValue.points, 0) + " " }
                    pts | { quiz.questions.length } Questions
                  </div>
                  </div>
                  { isFaculty && (
                    <div className="float-end">
                      { quiz.published ? (
                          <FaCheckCircle className="text-success me-2"
                            onClick={() => updateQuiz(quiz._id, {published: !quiz.published})}/>
                        ) : (
                          <MdCancel className="text-danger me-2"
                            onClick={() => updateQuiz(quiz._id, {published: !quiz.published})}/> ) }
                      <FaEllipsisVertical className="fs-4" onClick={() => setShowingQuiz(quiz._id)}/>
                    </div>)}
                  <Modal show={showingQuiz === quiz._id} onHide={closeModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>{quiz.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Quiz Options
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" onClick={() => {
                        router.push(`/Courses/${cid}/Quizzes/${quiz._id}/Editor`)
                      }}>Edit</Button>
                      <Button variant="danger" onClick={async () => {
                          await client.deleteQuiz(quiz._id);
                          await fetchQuizzes();
                          closeModal();}}>
                        Delete
                      </Button>
                      { quiz.published ? (
                        <Button variant="warning" onClick={async () => {
                            await client.updateQuiz(quiz._id, {published: false});
                            await fetchQuizzes();
                            closeModal();}}>
                          Unpublish
                        </Button>
                      ) : (
                        <Button variant="success" onClick={async () => {
                            await client.updateQuiz(quiz._id, {published: true});
                            await fetchQuizzes();
                            closeModal();}}>
                          Publish
                        </Button>
                      )}
                    </Modal.Footer>
                  </Modal>
                </ListGroupItem>)}) }
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
