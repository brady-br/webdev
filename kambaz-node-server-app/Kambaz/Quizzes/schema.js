import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
  _id: String,
  name: String,
  course: String,
  description: String,
  published: Boolean,
  available: String,
  until: String,
  due: String,
  quizType: {
    type: String,
    enum: ["GRADED_QUIZ", "PRACTICE_QUIZ", "GRADED SURVEY", "UNGRADED SURVEY"],
    default: "GRADED_QUIZ",
  },
  assignmentGroup: {
    type: String,
    enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
    default: "QUIZZES",
  },
  shuffle: Boolean,
  timeLimit: Number,
  maxAttempts: Number,
  showCorrectAnswers: {
    type: String,
    enum: ["IMMEDIATELY", "DUE", "UNTIL"],
    default: "IMMEDIATELY",
  },
  accessCode: String,
  oneQuestionAtATime: Boolean,
  webcamRequired: Boolean,
  lockQuestionsAfterAnswering: Boolean,
  questions: [{
    _id: String,
    title: String,
    points: Number,
    question: String,
    questionType: {
      type: String,
      enum: ["MULTIPLE_CHOICE", "TRUE_FALSE", "FILL_IN_THE_BLANK"],
      default: "MULTIPLE_CHOICE",
    },
    choices: [{choice: String, correct: Boolean}],
    trueFalse: Boolean,
    answers: [String],
  }],
}, { collection: "quizzes" });
export default quizSchema;
