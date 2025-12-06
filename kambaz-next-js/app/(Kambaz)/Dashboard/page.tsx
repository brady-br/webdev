"use client"
import { useDispatch, useSelector } from "react-redux";
import * as client from "../Courses/client";
import * as enrollmentsClient from "./client";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../Courses/reducer";
import { setEnrollments, enroll, unenroll } from "./reducer";
import { RootState } from "../store";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
  const [allCourses, setAllCourses] = useState(false);
  const dispatch = useDispatch();
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    img: "/images/reactjs.png", description: "New Description"
  });
  const fetchCourses = async () => {
    try {
      const courses = await client.findMyCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };
  const fetchAllCourses = async () => {
    try {
      const courses = await client.fetchAllCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  }
  const onToggleEnrollments = async () => {
    if (allCourses) await fetchCourses();
    else await fetchAllCourses();
    setAllCourses(!allCourses);
  }
  const fetchEnrollments = async () => {
    try {
      const enrollments = await enrollmentsClient.findMyEnrollments();
      dispatch(setEnrollments(enrollments));
    } catch (error) {
      console.error(error);
    }
  }
  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([ ...courses, newCourse ]));
    await fetchEnrollments();
  };
  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };
  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })));};
  const onEnroll = async (courseId: string) => {
    if (currentUser) {
      await client.enrollIntoCourse(currentUser?._id, courseId);
      await fetchEnrollments();
    }
  }
  const onUnenroll = async (courseId: string) => {
    if (currentUser) {
      await client.unenrollFromCourse(currentUser?._id, courseId)
      await fetchEnrollments();
      if (allCourses) await fetchAllCourses();
      else await fetchCourses();
    }
  }
  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
  }, [currentUser]);
  return (
    <div id="wd-dashboard" className="me-3">
      <h1 id="wd-dashboard-title">Dashboard
        <Button variant="primary" className="float-end mt-2"
                onClick={() => {onToggleEnrollments();}}>
          Enrollments
        </Button>
      </h1> <hr />
      {isFaculty && (<div>
        <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={onAddNewCourse} > Add </button>
          <button className="btn btn-warning float-end me-2"
                onClick={onUpdateCourse} id="wd-update-course-click">
          Update </button>
        </h5><br />
        <FormControl value={course.name} className="mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <FormControl as="textarea" value={course.description} rows={3}
          onChange={(e) => setCourse({ ...course, description: e.target.value })} />
        <hr />
        {allCourses ? (<h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>) :
                      (<h2>Your Courses ({courses.length})</h2>)}
      <hr />
      </div>)}
      <div id="wd-dashboard-courses" className="mb-2">
        <Row xs={1} md={5} className="g-4">
          { courses.map((course) => {
            const enrolled = enrollments.some((enrollment) =>
              enrollment.course === course._id);
            return (
              <Col className="wd-dashboard-course" style={{ width: "350px" }} key={course._id}>
                <Card>
                  <Link href={`/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                        onClick={(event) => {if (!enrolled) event.preventDefault();}}>
                    <CardImg src="/images/reactjs.png" variant="top" width="100%" height={160} />
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
                                  onUnenroll(course._id);
                                }}>
                          Unenroll
                        </button>
                        {isFaculty &&
                          <button onClick={(event) => {
                                    event.preventDefault();
                                    onDeleteCourse(course._id);
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
                                  onEnroll(course._id);
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
