import Link from "next/link";
import { FormControl, InputGroup, Button, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import { FaMagnifyingGlass, FaPlus, FaRegPenToSquare } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

export default function Assignments() {
  return (
    <div>
      <Row>
        <Col>
          <InputGroup className="d-flex mb-3 float-start" size="lg">
            <InputGroupText className="bg-white border-end-0">
              <FaMagnifyingGlass />
            </InputGroupText>
            <FormControl placeholder="Search..." id="wd-search-assignment" className="border-start-0"/>
          </InputGroup>
        </Col>
        <Col>
          <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </Button>
          <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </Button>
        </Col>
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
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              <IoEllipsisVertical />
            </div>
          </div>
          <ListGroup className="rounded-0" id="wd-assignment-list">
            <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <FaRegPenToSquare className="me-2 fs-3 text-success" />
                <div>
                  <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link">
                    A1 - ENV + HTML
                  </Link>
                  <br />
                  <span className="modules-for-assignment">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
                  <br />
                  <b>Due</b> May 13 at 11:59pm | 100 pts
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle style={{ top: "2px" }} className="text-success me-1 fs-5" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <FaRegPenToSquare className="me-2 fs-3 text-success" />
                <div>
                  <Link href="/Courses/1234/Assignments/234" className="wd-assignment-link">
                    A2 - CSS + BOOTSTRAP
                  </Link>
                  <br />
                  <span className="modules-for-assignment">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am |
                  <br />
                  <b>Due</b> May 20 at 11:59pm | 100 pts
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle style={{ top: "2px" }} className="text-success me-1 fs-5" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <FaRegPenToSquare className="me-2 fs-3 text-success" />
                <div>
                  <Link href="/Courses/1234/Assignments/345" className="wd-assignment-link">
                    A3 - JAVASCRIPT + REACT
                  </Link>
                  <br />
                  <span className="modules-for-assignment">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am |
                  <br />
                  <b>Due</b> May 27 at 11:59pm | 100 pts
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle style={{ top: "2px" }} className="text-success me-1 fs-5" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
);}
