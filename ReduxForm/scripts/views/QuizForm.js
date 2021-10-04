const { connect } = ReactRedux;
const { Field, FieldArray, reduxForm, formValueSelector, FormSection } =
  ReduxForm;

//Address.js
let Address = () => {
  return (
    <div>
      <Field name="streetName" component="input" type="text" />
      <Field name="number" component="input" type="text" />
      <Field name="zipCode" component="input" type="text" />
    </div>
  );
};

//Party.js
let Party = () => {
  return (
    <div>
      <Field name="givenName" component="input" type="text" />
      <Field name="middleName" component="input" type="text" />
      <Field name="surname" component="input" type="text" />
      <FormSection name="address">
        <Address />
      </FormSection>
    </div>
  );
};

//OrderForm.js
let OrderForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormSection name="_0">
        <Party />
      </FormSection>
      <FormSection name="_1">
        <Party />
      </FormSection>
    </form>
  );
};
//don't forget to connect OrderForm with reduxForm()

OrderForm = reduxForm({
  form: "orderForm",
})(OrderForm);

OrderForm = connect((state) => {
  return { state: state };
})(OrderForm);
