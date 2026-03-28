import EnrollmentsDao from "./dao.js";
export default function EnrollmentsRoutes(app) {
  const dao = EnrollmentsDao();
  const findUserEnrollments = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    const enrollments = await dao.findEnrollmentsForUser(currentUser._id);
    res.send(enrollments)
  }
  const enroll = (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    const { courseId } = req.params;
    const status = dao.enrollUserInCourse(currentUser._id, courseId);
    res.send(status);
  }
  const unenroll = (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    const { courseId } = req.params;
    const status = dao.unenrollUserFromCourse(currentUser._id, courseId);
    res.send(status);
  }
  app.get("/api/enrollments", findUserEnrollments);
  app.post("/api/enrollments/:courseId", enroll);
  app.delete("/api/enrollments/:courseId", unenroll);
}
