"use client";
import * as db from "../../../../Database";
import { useParams } from "next/navigation";
import {FormLabel, FormControl, FormSelect, FormCheck, InputGroup, Row, Col, Button, Form, FormGroup} from "react-bootstrap";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((assignment) => assignment.course === cid && assignment._id === aid)
  return (
    <div id="wd-assignments-editor">
      <Form>
        <FormGroup controlId="assignmentName">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl defaultValue={assignment?.title} className="" />
        </FormGroup>
        <br />
        <FormControl as="textarea" rows={10} defaultValue={assignment?.description}/>
        <br />
        <FormGroup controlId="assignmentPoints">
          <Row className="align-items-center">
            <Col xs={3} className="text-end">
              <FormLabel>Points</FormLabel>
            </Col>
            <Col xs={9}>
              <FormControl type="number" defaultValue={assignment?.points} />
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
                <FormControl type="datetime-local" defaultValue={assignment?.due} /> <br />

                <Row>
                  <Col xs={6}>
                    <h6>Available from</h6>
                    <FormControl type="datetime-local" defaultValue={assignment?.available} />
                  </Col>
                  <Col xs={6}>
                    <h6>Until</h6>
                    <FormControl type="datetime-local" defaultValue={assignment?.until} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </div>
);}
