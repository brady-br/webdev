import { createSlice } from "@reduxjs/toolkit";
const initialState : { assignments:
  { _id: string;
    title: string;
    course: string;
    available: string;
    until: string;
    due: string;
    points: number;
    description: string; }[] } = {
  assignments: []
}
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      state.assignments = [...state.assignments, assignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a) => 
        a._id === assignment._id ? assignment : a
      );
    }
  }
})

export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;