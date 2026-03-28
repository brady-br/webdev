"use client";
import Link from "next/link";
import { RootState } from "../../../../store";
import { addAssignment, setAssignments, updateAssignment } from "../reducer";
import * as client from "../client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {FormLabel, FormControl, FormSelect, FormCheck, Row, Col, Button, Form, FormGroup} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function AssignmentEditor() {
  const { cid, aid } : { cid: string, aid: string } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid);
    dispatch(setAssignments(assignments));
  }
  useEffect(() => { fetchAssignments(); }, []);
  let thisAssignment = assignments.find((a) => a.course === cid && a._id === aid);
  const newAssignment = thisAssignment === undefined
  if (thisAssignment === undefined) thisAssignment = {_id: aid, title: "", course: cid,
    available: "", until: "", due: "", points: 100, description: ""};
  const [assignment, setAssignment] = useState(thisAssignment);
  const createAssignment = async () => {
    const newAssignment = await client.createAssignmentForCourse(cid, assignment);
    dispatch(setAssignments([...assignments, newAssignment]));
  };
  const updateThisAssignment = async () => {
    const updatedAssignment = await client.updateAssignment(assignment._id, assignment);
    dispatch(setAssignments(assignments.map((a) => a._id === assignment._id ? assignment : a)));
  }
  const onSave = newAssignment ? createAssignment : updateThisAssignment;
  
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
          <Button href={`/Courses/${cid}/Assignments`} className="float-end"
                  variant="danger" size="lg"
                  onClick={() => { onSave(); }} >
            Save
          </Button>
          <Button href={`/Courses/${cid}/Assignments`} className="float-end me-2"
                  variant="secondary" size="lg">
            Cancel
          </Button>
        </Col>
      </Row>
      <br />
    </div>
);}
