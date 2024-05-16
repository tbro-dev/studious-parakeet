const { useState, useCallback } = React;

const { Form } = ReactFinalForm;

const Wizard = ({ children, onSubmit, initialValues = {} }) => {
  const [page, setPage] = useState(0);
  const [values, setValues] = useState(initialValues);

  const next = useCallback(
    (values) => {
      setPage((prevPage) => Math.min(prevPage + 1, React.Children.count(children) - 1));
      setValues(values);
    },
    [children]
  );

  const previous = useCallback(() => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  }, []);

  const validate = useCallback(
    (values) => {
      const activePage = React.Children.toArray(children)[page];
      return activePage.props.validate ? activePage.props.validate(values) : {};
    },
    [children, page]
  );

  const handleSubmit = useCallback(
    (values) => {
      const isLastPage = page === React.Children.count(children) - 1;
      if (isLastPage) {
        return onSubmit(values);
      } else {
        next(values);
      }
    },
    [children, next, onSubmit, page]
  );

  const activePage = React.Children.toArray(children)[page];
  const isLastPage = page === React.Children.count(children) - 1;

  return (
    <Form
      initialValues={values}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          {activePage}
          <div className="buttons">
            {page > 0 && (
              <button type="button" onClick={previous}>
                « Previous
              </button>
            )}
            {!isLastPage && <button type="submit">Next »</button>}
            {isLastPage && (
              <button type="submit" disabled={submitting}>
                Submit
              </button>
            )}
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    </Form>
  );
};

Wizard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Wizard.Page = ({ children }) => children;
