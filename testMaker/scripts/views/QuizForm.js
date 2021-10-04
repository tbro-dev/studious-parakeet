//original: https://github.com/wingkwong/react-quiz-form/blob/master/src/QuizForm.js

const { connect } = ReactRedux;
const { Field, FieldArray, reduxForm, formValueSelector } = ReduxForm;

let QuizForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <div className="QuizForm">
      <form name="quiz-form" onSubmit={handleSubmit}>
        <Field
          name="quizTitle"
          type="text"
          component={RenderInputField}
          label="Quiz Title"
        />
        <Field
          name="quizSynopsis"
          type="text"
          component={RenderTextareaField}
          label="Quiz Synopsis"
        />
        <FieldArray name="questions" component={RenderQuestions} />
        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    </div>
  );
};

QuizForm = reduxForm({
  form: "quizForm",
  validate,
})(QuizForm);

const selector = formValueSelector("quizForm");

QuizForm = connect((state) => {
  const questions = selector(state, "questions");
  const questionType =
    questions && questions.map((question) => question.questionType);

  return { questionType: questionType };
})(QuizForm);
