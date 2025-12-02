"use client";
import { ReactNode, useState, useEffect } from "react";
import CourseNavigation from "./Navigation";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";
import * as client from "../client"
import { setCourses } from "../reducer";
import { FaAlignJustify } from "react-icons/fa6";
import Breadcrumb from "./Breadcrumb";
export default function CoursesLayout({ children }: { children: ReactNode }) {
 const dispatch = useDispatch();
 const { currentUser } = useSelector((state: RootState) => state.accountReducer);
 const fetchCourses = async () => {
   try {
     const courses = await client.findMyCourses();
     dispatch(setCourses(courses));
   } catch (err) {}
 }
 useEffect(() => {fetchCourses();}, [currentUser])
 const { cid } : { cid: string } = useParams();
 const { courses } = useSelector((state: RootState) => state.coursesReducer);
 const course = courses.find((course) => course._id === cid);
 const [navVisible, setNavVisible] = useState(true);
 const toggleNav = () => setNavVisible(!navVisible)
 return (
   <div id="wd-courses">
     <h2 className="text-danger">
       <FaAlignJustify className="me-4 fs-4 mb-1" onClick={toggleNav} />
       <Breadcrumb course={course} />
     </h2>
     <hr />
     <div className="d-flex">
       { navVisible &&
         (<CourseNavigation cid={cid}/>) }
       <div className="flex-fill">{children}</div>
     </div>
   </div>
 );
}
