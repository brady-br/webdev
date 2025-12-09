import { Button, Form, FormCheck, FormControl, FormSelect } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

export default function QuestionsEditor(
    {questions, updateQuestions}:
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {questions: any[], updateQuestions: (qs: any[]) => void}) {
  return (
    <div>
      { questions.map((question) => (
        <div key={question._id} style={{border: "0.5px solid black"}} className="p-2 mb-3">
          <div className="d-flex">
            <FormControl className="w-25 me-2" value={question.title}
              onChange={(e) => updateQuestions(questions.map((q) =>
                q._id === question._id ? {...q, title: e.target.value} : q))} />
            <FormSelect value={question.questionType} className="w-50 me-2"
              onChange={(e) => updateQuestions(questions.map((q) =>
                q._id === question._id ? {...q, questionType: e.target.value} : q))}>
              <option value="MULTIPLE_CHOICE">Multiple Choice</option>
              <option value="TRUE_FALSE">True or False</option>
              <option value="FILL_IN_THE_BLANK">Fill in the Blank</option>
            </FormSelect>
            <span className="d-flex align-items-center text-end">
              pts:
              <FormControl className="w-25" type="number" value={question.points}
                onChange={(e) => updateQuestions(questions.map((q) =>
                  q._id === question._id ? {...q, points: parseInt(e.target.value)} : q))}/>
            </span>
          </div> <hr/>
          <h5>Question:</h5>
          <FormControl as="textarea" rows={3} value={question.question} className="mb-2"
            onChange={(e) => updateQuestions(questions.map((q) =>
              q._id === question._id ? {...q, question: e.target.value} : q))}/>
          <h5>Answers</h5>
          { question.questionType === "MULTIPLE_CHOICE" && (
            <div>{ question.choices.map((choice: {choice: string, correct: boolean}, index: number) => (
                <div key={`${question._id}-${index}`} className="d-flex align-items-center mb-2">
                  <FormCheck label={choice.correct ? "Correct Answer" : "Possible Answer"}
                    name={`choices-${question._id}`} type="radio" checked={choice.correct} className="w-25"
                    onChange={(e) => updateQuestions(questions.map((q) =>
                      q._id === question._id ? {...q, choices: q.choices.map((c: {choice: string, correct: boolean}, i: number) =>
                        i === index ? {...c, correct: e.target.checked} : {...c, correct: false})} : q))}/>
                  <FormControl value={choice.choice} onChange={(e) => updateQuestions(questions.map((q) =>
                    q._id === question._id ? {...q, choices: q.choices.map((c: {choice: string, correct: boolean}, i: number) =>
                      i === index ? {...c, choice: e.target.value} : c)} : q))}/>
                </div>))}
              <div className="d-flex justify-content-center flex-fill">
                <Button variant="secondary" className="me-2"
                  onClick={() => updateQuestions(questions.map((q) =>
                    q._id === question._id ? {...q, choices: [...q.choices, {choice: "", correct: q.choices.length === 0}]} : q))}>
                  <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                  New Answer
                </Button>
                <Button variant="danger"
                  onClick={() => updateQuestions(questions.map((q) =>
                    q._id === question._id ? {...q, choices: q.choices.slice(0, -1)} : q))}>
                  Remove Answer
                </Button>
              </div>
            </div>)}
          { question.questionType === "TRUE_FALSE" && (
            <div>
              <FormCheck label="True" name={`tf-${question._id}`} type="radio" checked={question.trueFalse}
                onChange={(e) => updateQuestions(questions.map((q) =>
                  q._id === question._id ? {...q, trueFalse: e.target.checked} : q))}/>
              <FormCheck label="False" name={`tf-${question._id}`} type="radio" checked={!question.trueFalse}
                onChange={(e) => updateQuestions(questions.map((q) =>
                  q._id === question._id ? {...q, trueFalse: !e.target.checked} : q))}/>
            </div>
          ) }
          { question.questionType === "FILL_IN_THE_BLANK" && (
            <div>
              { question.answers.map((answer: string, index: number) => (
                <div key={`${question._id}-${index}`} className="d-flex align-items-center mb-2">
                  <span className="w-25">Possible Answer</span>
                  <FormControl value={answer} onChange={(e) => updateQuestions(questions.map((q) =>
                    q._id === question._id ? {...q, answers: q.answers.map((a: string, i: number) =>
                      i === index ? e.target.value : a)} : q))}/>
                </div>
              ))}
              <div className="d-flex justify-content-center flex-fill">
                <Button variant="secondary" className="me-2"
                  onClick={() => updateQuestions(questions.map((q) =>
                    q._id === question._id ? {...q, answers: [...q.answers, ""]} : q))}>
                  <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                  New Answer
                </Button>
                <Button variant="danger"
                  onClick={() => updateQuestions(questions.map((q) =>
                    q._id === question._id ? {...q, answers: q.answers.slice(0, -1)} : q))}>
                  Remove Answer
                </Button>
              </div>
            </div>
          )}
        </div>))}
      <div className="d-flex justify-content-center flex-fill">
        <Button variant="secondary" size="lg"
            onClick={() => updateQuestions([...questions, {
              _id: uuidv4(),
              title: "New Question",
              points: 5,
              question: "",
              questionType: "MULTIPLE_CHOICE",
              choices: [],
              trueFalse: false,
              answers: [],
            }])}>
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          New Question
        </Button>
      </div>
    </div>
  );
}