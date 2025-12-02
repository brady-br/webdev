import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState : { enrollments: {
    _id: string;
    user: string;
    course: string;
  }[] } = {
  enrollments: []
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, {payload: enrollments}) => {
      state.enrollments = enrollments;
    },
    enroll: (state, {payload: enrollment}) => {
      const newEnrollment = {...enrollment, _id: uuidv4()};
      state.enrollments = [...state.enrollments, newEnrollment];
    },
    unenroll: (state, {payload: enrollmentId}) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => enrollment._id !== enrollmentId
      );
    }
  }
});
export const { setEnrollments, enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
