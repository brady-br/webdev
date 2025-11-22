"use client";
import Link from "next/link";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../reducer";
import { useParams } from "next/navigation";
import { useState } from "react";
import {FormLabel, FormControl, FormSelect, FormCheck, InputGroup, Row, Col, Button, Form, FormGroup} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function AssignmentEditor() {
  const { cid, aid } : { cid: string, aid: string } = useParams();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  var thisAssignment = assignments.find((a) => a.course === cid && a._id === aid)
  const onSave = thisAssignment === undefined ? addAssignment : updateAssignment;
  if (thisAssignment === undefined) thisAssignment = {_id: aid, title: "", course: cid,
    available: "", until: "", due: "", points: 100, description: ""};
  const [assignment, setAssignment] = useState(thisAssignment);
  const dispatch = useDispatch();
  return (
    <div id="wd-assignments-editor">
      <Form>
        <FormGroup controlId="assignmentName">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl defaultValue={assignment?.title}
                       onChange={(e) => setAssignment({...assignment, title: e.target.value})} />
        </FormGroup>
        <br />
        <FormControl as="textarea" rows={10} defaultValue={assignment?.description}
                     onChange={(e) => setAssignment({...assignment, description: e.target.value})} />
        <br />
        <FormGroup controlId="assignmentPoints">
          <Row className="align-items-center">
            <Col xs={3} className="text-end">
              <FormLabel>Points</FormLabel>
            </Col>
            <Col xs={9}>
              <FormControl type="number" defaultValue={assignment?.points}
                           onChange={(e) => setAssignment({...assignment, points: parseInt(e.target.value)})} />
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
                <FormControl type="datetime-local" defaultValue={assignment?.due}
                             onChange={(e) => setAssignment({...assignment, due: e.target.value})} /> <br />

                <Row>
                  <Col xs={6}>
                    <h6>Available from</h6>
                    <FormControl type="datetime-local" defaultValue={assignment?.available}
                                 onChange={(e) => setAssignment({...assignment, available: e.target.value})} />
                  </Col>
                  <Col xs={6}>
                    <h6>Until</h6>
                    <FormControl type="datetime-local" defaultValue={assignment?.until}
                                 onChange={(e) => setAssignment({...assignment, until: e.target.value})} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </FormGroup>
      </Form>
      <br />
      <hr />
      <Row className="d-flex">
        <Col>
          <Link href={`/Courses/${cid}/Assignments`} className="float-end">
            <Button variant="danger" size="lg"
                    onClick={() => {dispatch(onSave(assignment))}} >
              Save
            </Button>
          </Link>
          <Link href={`/Courses/${cid}/Assignments`} className="float-end me-2">
            <Button variant="secondary" size="lg">
              Cancel
            </Button>
          </Link>
        </Col>
      </Row>
      <br />
    </div>
);}
