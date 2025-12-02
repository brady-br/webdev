import { v4 as uuidv4 } from "uuid";
export default function EnrollmentsDao(db) {
  function findEnrollmentsForUser(userId) {
    const { enrollments } = db;
    const userEnrollments = enrollments.filter(
      (enrollment) => enrollment.user === userId);
    return userEnrollments;
  }
  function enrollUserInCourse(userId, courseId) {
    const { enrollments } = db;
    enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
  }
  function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = db;
    db.enrollments = enrollments.filter(
      (enrollment) => enrollment.user !== userId || enrollment.course !== courseId);
  }
  return { findEnrollmentsForUser, enrollUserInCourse, unenrollUserFromCourse };
}
