import { Col, FormCheck, FormControl, FormSelect, Row } from "react-bootstrap";

export default function DetailsEditor(
    {quiz, updateQuiz}:
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {quiz: any, updateQuiz: (q: any) => void}) {
  return (
    <div>
      <FormControl className="w-50" value={quiz.name}
        onChange={(e) => updateQuiz({...quiz, name: e.target.value})}/>
      <br/>
      Quiz Instructions:
      <FormControl as="textarea" rows={3} value={quiz.description}
        onChange={(e) => updateQuiz({...quiz, description: e.target.value})}/>
      <br/>
      <Row className="align-items-center mb-2">
        <Col xs={3} className="text-end">
          Quiz Type
        </Col>
        <Col>
          <FormSelect value={quiz.quizType} className="w-50"
              onChange={(e) => updateQuiz({...quiz, quizType: e.target.value})}>
            <option value="GRADED_QUIZ">Graded Quiz</option>
            <option value="PRACTICE_QUIZ">Practice Quiz</option>
            <option value="GRADED_SURVEY">Graded Survey</option>
            <option value="UNGRADED_QUIZ">Ungraded Survey</option>
          </FormSelect>
        </Col>
      </Row>
      <Row className="align-items-center mb-2">
        <Col xs={3} className="text-end">
          Assignment Group
        </Col>
        <Col>
          <FormSelect value={quiz.assignmentGroup} className="w-50"
              onChange={(e) => updateQuiz({...quiz, assignmentGroup: e.target.value})}>
            <option value="QUIZZES">Quizzes</option>
            <option value="EXAMS">Exams</option>
            <option value="ASSIGNMENTS">Assignments</option>
            <option value="PROJECT">Project</option>
          </FormSelect>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={3} className="text-end">
          Options
        </Col>
        <Col>
          <FormCheck label="Shuffle Answers" checked={quiz.shuffle} className="mb-2"
            onChange={(e) => updateQuiz({...quiz, shuffle: e.target.checked})} />
          <span className="w-50 d-flex align-items-center mb-2">
            Time Limit:
            <FormControl type="number" defaultValue={quiz.timeLimit} className="ms-3 w-25 me-1"
              onChange={(e) => updateQuiz({...quiz, timeLimit: parseInt(e.target.value)})} />
            Minutes
          </span>
          <span className="d-flex w-50 align-items-center mb-2">
            <FormCheck label="Allow Multiple Attempts" checked={quiz.maxAttempts !== 1}
              onChange={(e) => {
                if (!e.target.checked) {updateQuiz({...quiz, maxAttempts: 1});}
                else {updateQuiz({...quiz, maxAttempts: 2});}
              }}/>
            { quiz.maxAttempts !== 1 && (
              <FormControl type="number" defaultValue={quiz.maxAttempts} className="w-50 ms-2"
                onChange={(e) => updateQuiz({...quiz, maxAttempts: parseInt(e.target.value)})}/>
            )}
          </span>
          <FormCheck label="One Question at a Time" checked={quiz.oneQuestionAtATime} className="mb-2"
            onChange={(e) => updateQuiz({...quiz, oneQuestionAtATime: e.target.checked})}/>
          <FormCheck label="Webcam Required" checked={quiz.webcamRequired} className="mb-2"
            onChange={(e) => updateQuiz({...quiz, webcamRequired: e.target.checked})}/>
          <FormCheck label="Lock Questions After Answering" checked={quiz.lockQuestionsAfterAnswering}
            onChange={(e) => updateQuiz({...quiz, lockQuestionsAfterAnswering: e.target.checked})}/>
        </Col>
      </Row>
      <Row className="align-items-center mb-2">
        <Col xs={3} className="text-end">
          Show Correct Answers
        </Col>
        <Col>
          <FormSelect value={quiz.showCorrectAnswers} className="w-50"
              onChange={(e) => updateQuiz({...quiz, showCorrectAnswers: e.target.value})}>
            <option value="IMMEDIATELY">Immediately</option>
            <option value="DUE">When Due</option>
            <option value="UNTIL">When Closed</option>
          </FormSelect>
        </Col>
      </Row>
      <Row className="align-items-center mb-2">
        <Col xs={3} className="text-end">
          Access Code
        </Col>
        <Col>
          <FormControl className="w-50" defaultValue={quiz.accessCode}
            onChange={(e) => updateQuiz({...quiz, accessCode: e.target.value})}/>
        </Col>
      </Row>
      <Row className="align-items-center mb-2">
        <Col xs={3} className="text-end">
          Due
        </Col>
        <Col>
          <FormControl type="date" defaultValue={quiz.due}
            onChange={(e) => updateQuiz({...quiz, due: e.target.value})}/>
        </Col>
      </Row>
      <Row className="align-items-center mb-2">
        <Col xs={3} className="text-end">
          Available
        </Col>
        <Col>
          <FormControl type="date" defaultValue={quiz.available}
            onChange={(e) => updateQuiz({...quiz, available: e.target.value})}/>
        </Col>
      </Row>
      <Row className="align-items-center mb-2">
        <Col xs={3} className="text-end">
          Until
        </Col>
        <Col>
          <FormControl type="date" defaultValue={quiz.until}
            onChange={(e) => updateQuiz({...quiz, until: e.target.value})}/>
        </Col>
      </Row>
    </div>
  );
}
