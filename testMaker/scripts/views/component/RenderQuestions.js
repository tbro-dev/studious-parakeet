let RenderQuestions = ({ fields, meta: { touched, error, submitFailed } }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push({})}>
                Add Question
            </button>
            {(touched || submitFailed) && error && <span>{error}</span>}
        </li>
        {fields.map((question, index) => (
            <li key={index}>
                <button
                    type="button"
                    title="Remove Question"
                    onClick={() => fields.remove(index)}
                />
                <h4>Question #{index + 1}</h4>
                <Field
                    name={`${question}.question`}
                    type="text"
                    component={RenderInputField}
                    label="Question Title"
                />
                <Field
                    name={`${question}.questionType`}
                    component={RenderSelectQuestionTypeField}
                    label="Question Type"
                >
                    {/* This is where you can create the question types for the PT's */}

                    <option value="">Please select a question type</option>
                    <option value="text">Text</option>
                    <option value="photo">Photo</option>
                </Field>
                <FieldArray
                    name={`${question}.answers`}
                    component={RenderTextAnswers}
                    question={question}
                />
                <Field
                    name={`${question}.messageForCorrectAnswer`}
                    type="text"
                    component={RenderTextareaField}
                    label="Message for Correct Answer"
                />
                <Field
                    name={`${question}.messageForIncorrectAnswer`}
                    type="text"
                    component={RenderTextareaField}
                    label="Message for Incorrect Answer"
                />
                <Field
                    name={`${question}.explanation`}
                    type="text"
                    component={RenderTextareaField}
                    label="Explanation"
                />
                <Field
                    name={`${question}.point`}
                    type="number"
                    component={RenderInputField}
                    label="Point"
                />
            </li>
        ))}
    </ul>
);