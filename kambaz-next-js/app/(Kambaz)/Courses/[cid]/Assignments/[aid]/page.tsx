"use client";
import {FormLabel, FormControl, FormSelect, FormCheck, InputGroup, Row, Col, Button, Form, FormGroup} from "react-bootstrap";

export default function AssignmentEditor() {
  const text = "The assignment is available online\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n- Your full name and section\n- Links to each of the lab assignments\n- Link to the Kambaz application\n- Links to all relevant source code repositories\n\nThe Kambaz application should include a link to navigate back to the landing page.";
  return (
    <div id="wd-assignments-editor">
      <Form>
        <FormGroup controlId="assignmentName">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl defaultValue="A1" className="" />
        </FormGroup>
        <br />
        <FormControl as="textarea" rows={11} defaultValue={text}/>
        <br />
        <FormGroup controlId="assignmentPoints">
          <Row className="align-items-center">
            <Col xs={3} className="text-end">
              <FormLabel>Points</FormLabel>
            </Col>
            <Col xs={9}>
              <FormControl type="number" defaultValue={100} />
            </Col>
          </Row>
        </FormGroup>
        <br />
        <FormGroup controlId="assignmentGroup">
          <Row className="align-items-center">
            <Col xs={3} className="text-end">
              <FormLabel>Assignment Group</FormLabel>
            </Col>
            <Col xs={9}>
              <FormSelect defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </FormSelect>
            </Col>
          </Row>
        </FormGroup>
        <br />
        <FormGroup controlId="displayGradeAs">
          <Row className="align-items-center">
            <Col xs={3} className="text-end">
              <FormLabel>Display Grade as</FormLabel>
            </Col>
            <Col xs={9}>
              <FormSelect defaultValue="PERCENTAGE">
                <option value="PERCENTAGE">Percentage</option>
              </FormSelect>
            </Col>
          </Row>
        </FormGroup>
        <br />
        <FormGroup controlId="submissionType">
          <Row>
            <Col xs={3} className="text-end">
              <FormLabel>Submission Type</FormLabel>
            </Col>
            <Col xs={9}>
              <div className="border p-4 rounded">
                <FormSelect defaultValue="ONLINE">
                    <option value="ONLINE">Online</option>
                </FormSelect> <br />
                <h5>Online Entry Options</h5>
                <br />
                <FormCheck label="Text Entry" defaultChecked={false} />
                <br />
                <FormCheck label="Website URL" defaultChecked={true} />
                <br />
                <FormCheck label="Media Recordings" defaultChecked={false} />
                <br />
                <FormCheck label="Student Annotation" defaultChecked={false} />
                <br />
                <FormCheck label="File Uploads" defaultChecked={false} />
              </div>
            </Col>
          </Row>
        </FormGroup>
        <br />
        <FormGroup controlId="assignTo">
          <Row>
            <Col xs={3} className="text-end">
              <FormLabel>Assign</FormLabel>
            </Col>
            <Col xs={9}>
              <div className="border p-4 rounded">
                <h5>Assign To</h5>
                <FormControl defaultValue="Everyone" /> <br />

                <h5>Due</h5>
                <FormControl type="date" defaultValue="2024-05-13" /> <br />

                <Row>
                  <Col xs={6}>
                    <h6>Available from</h6>
                    <FormControl type="date" defaultValue="2024-05-06" />
                  </Col>
                  <Col xs={6}>
                    <h6>Until</h6>
                    <FormControl type="date" defaultValue="2024-05-20" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </div>
);}
