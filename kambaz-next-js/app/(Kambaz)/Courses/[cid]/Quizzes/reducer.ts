import { createSlice } from "@reduxjs/toolkit";
const initialState: { quizzes:
    { _id: string,
      name: string,
      course: string,
      description: string,
      published: boolean,
      available: string,
      until: string,
      due: string,
      questions: {
        _id: string,
        title: string,
        points: number,
        question: string,
        questionType: string,
        choices: {choice: string, correct: boolean}[],
        trueFalse: boolean,
        answers: string[],
      }[],
      quizType: string,
      assignmentGroup: string,
      shuffle: boolean,
      timeLimit: number,
      maxAttempts: number,
      showCorrectAnswers: string,
      accessCode: string,
      oneQuestionAtATime: boolean,
      webcamRequired: boolean,
      lockQuestionsAfterAnswering: boolean,
    }[]
  } = {quizzes: []};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, {payload: quizzes}) => {
      state.quizzes = quizzes;
    }
  }
});

export const { setQuizzes } = quizzesSlice.actions;
export default quizzesSlice.reducer;
