import model from "./model.js";
export default function QuizzesDao() {
  function findQuizzesForCourse(courseId) {
    const quizzes = model.find({course: courseId});
    return quizzes;
  }
  function createQuiz(quiz) {
    return model.create(quiz);
  }
  function deleteQuiz(quizId) {
    return model.deleteOne({_id: quizId});
  }
  function updateQuiz(quizId, updates) {
    return model.updateOne({_id: quizId}, {$set: updates});
  }
  return {
    findQuizzesForCourse,
    createQuiz,
    deleteQuiz,
    updateQuiz,
  }
}
