"use client"
import { useSelector } from "react-redux";
import Modules from "../Modules/page";
import CourseStatus from "./Status";
import { RootState } from "@/app/(Kambaz)/store";
export default function Home() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
        <Modules />
      </div>
      { isFaculty && (<div className="d-none d-lg-block">
          <CourseStatus />
        </div>
      )}
    </div>
  );
}
