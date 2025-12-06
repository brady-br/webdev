"use client";
import { RootState } from "../../../store";
import { deleteAssignment, setAssignments } from "./reducer";
import * as client from "./client"
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FormControl, InputGroup, Button, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import { FaMagnifyingGlass, FaPenToSquare, FaPlus, FaTrash } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { v4 as uuidv4 } from "uuid";
import DeleteAssignment from "./DeleteAssignment";

export default function Assignments() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const isFaculty = currentUser !== null && currentUser.role === "FACULTY";
  const { cid } : { cid: string } = useParams();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  // suppressHydrationWarning
  const newAssignmentId = uuidv4();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid);
    dispatch(setAssignments(assignments));
  }
  const onDeleteAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  }
  useEffect(() => { fetchAssignments(); }, []);
  return (
    <div className="me-3">
      <Row>
        <Col>
          <InputGroup className="d-flex mb-3 float-start" size="lg">
            <InputGroupText className="bg-white border-end-0">
              <FaMagnifyingGlass />
            </InputGroupText>
            <FormControl placeholder="Search..." id="wd-search-assignment" className="border-start-0"/>
          </InputGroup>
        </Col>
        {isFaculty && (<Col>
          <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment"
                  href={`/Courses/${cid}/Assignments/${newAssignmentId}`}
                  suppressHydrationWarning>
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </Button>
          <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </Button>
        </Col>)}
      </Row>
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between" id="wd-assignments-title">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <GoTriangleDown className="me-2 fs-3" />
              ASSIGNMENTS
            </div>
            <div className="d-flex align-items-center">
              <Button variant="outline-secondary" className="pill-button position-relative me-2">40% of Total</Button>
              {isFaculty && (<FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />)}
              {isFaculty && (<IoEllipsisVertical />)}
            </div>
          </div>
          <ListGroup className="rounded-0" id="wd-assignment-list">
            {assignments.map((assignment) => (
              <ListGroupItem key={assignment._id} className="wd-assignment p-3 ps-1 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <FaPenToSquare className="me-2 fs-3 text-success" />
                  <div>
                    {isFaculty ?
                      (<Link href={`/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link">
                        {assignment.title}
                      </Link>) : assignment.title}
                    <br />
                    <span className="modules-for-assignment">Multiple Modules</span> | <b>Not available until </b>
                    {new Date(assignment.available).toLocaleString("en-US", {
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit"
                    })}
                    <br />
                    <b>Due </b>
                    {new Date(assignment.due).toLocaleString("en-US", {
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit"
                    })} | {assignment.points} pts
                  </div>
                  <DeleteAssignment show={show} handleClose={() => setShow(false)}
                    onDelete={() => {onDeleteAssignment(assignment._id);}}/>
                </div>
                <div className="d-flex align-items-center">
                  {isFaculty && (<div>
                    <FaTrash className="text-danger me-2" onClick={() => setShow(true)}/>
                    <FaCheckCircle style={{top: "2px"}} className="text-success me-1 fs-5" />
                    <IoEllipsisVertical className="fs-4" /></div>)}
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
);}
