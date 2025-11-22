"use client"
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { enroll, unenroll } from "./reducer";
import { RootState } from "../store";
import { useState } from "react";
import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
  const userCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser?._id &&
        enrollment.course === course._id))
  const [allCourses, setAllCourses] = useState(false);
  const dispatch = useDispatch();
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    img: "/images/reactjs.png", description: "New Description"
  });
  return (
    <div id="wd-dashboard" className="me-3">
      <h1 id="wd-dashboard-title">Dashboard
        <Button variant="primary" className="float-end mt-2"
                onClick={() => setAllCourses(!allCourses)}>
          Enrollments
        </Button>
      </h1> <hr />
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => dispatch(addNewCourse(course))} > Add </button>
          <button className="btn btn-warning float-end me-2"
                onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
          Update </button>
      </h5><br />
      <FormControl defaultValue={course.name} className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <FormControl as="textarea" value={course.description} rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <hr />
      {allCourses ? (<h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>) :
                    (<h2>Your Courses ({userCourses.length})</h2>)}
      <hr />
      <div id="wd-dashboard-courses" className="mb-2">
        <Row xs={1} md={5} className="g-4">
          {(allCourses ? courses : userCourses).map((course) => {const enrolled = userCourses.includes(course);
            return (
              <Col className="wd-dashboard-course" style={{ width: "350px" }} key={course._id}>
                <Card>
                  <Link href={`/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                        onClick={(event) => {if (!enrolled) event.preventDefault();}}>
                    <CardImg src={course.img} variant="top" width="100%" height={160} />
                    <CardBody className="card-body">
                      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name} </CardTitle>
                      <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        {course.description} </CardText>
                      {enrolled ? (<div>
                        <button className="btn btn-primary me-1">
                                Go </button>
                        <button className="btn btn-danger me-1"
                                onClick={(event) => {
                                  event.preventDefault();
                                  dispatch(unenroll(enrollments.find(
                                    (enrollment) => enrollment.course === course._id &&
                                                    enrollment.user === currentUser?._id)?._id));
                                }}>
                          Unenroll
                        </button>
                        {isFaculty &&
                          <button onClick={(event) => {
                                    event.preventDefault();
                                    dispatch(deleteCourse(course._id));
                                  }}
                                  className="btn btn-danger float-end"
                                  id="wd-delete-course-click">
                                  Delete
                          </button>
                        }
                        {isFaculty &&
                          <button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-1 float-end" >
                            Edit
                          </button>
                        }
                      </div>) :
                      (<div>
                        <button className="btn btn-success me-1 mb-3 float-end"
                                onClick={(event) => {
                                  event.preventDefault();
                                  dispatch(enroll({course: course._id, user: currentUser?._id}))
                                }}>
                          Enroll
                        </button>
                      </div>)}
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            );}
          )}
        </Row>
      </div>
    </div>
  );
}
