let RenderTextAnswers = ({ fields, question, meta: { error } }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push()}>
                Add Answer
            </button>
        </li>
        {fields.map((answer, index) => (
            <li key={index}>
                <button
                    type="button"
                    title="Remove Answer"
                    onClick={() => fields.remove(index)}
                />
                <Field
                    name={answer}
                    type="text"
                    component={RenderInputField}
                    label={`Answer #${index + 1}`}
                />
            </li>
        ))}
        <li>
            <Field
                name={`${question}.correctAnswer`}
                component={RenderSelectField}
                label="Correct Answer"
            >
                <option value="">Please select correct answer</option>
                {fields.map((answer, index) => (
                    <option key={index + 1} value={index + 1}>{`Answer #${index + 1
                        }`}</option>
                ))}
            </Field>
        </li>

        {error && <li className="error">{error}</li>}
    </ul>
);