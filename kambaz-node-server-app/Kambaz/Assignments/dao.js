import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
export default function AssignmentsDao() {
  function findAssignmentsForCourse(courseId) {
    const assignments = model.find({course: courseId});
    return assignments
  }
  function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    return model.create(newAssignment);
  }
  function updateAssignment(assignmentId, updates) {
    return model.updateOne({_id: assignmentId}, {$set: updates});
  }
  function deleteAssignment(assignmentId) {
    return model.deleteOne({_id: assignmentId});
  }
  return {
    findAssignmentsForCourse,
    createAssignment,
    updateAssignment,
    deleteAssignment
  };
}
