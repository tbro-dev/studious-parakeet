const {
    Container,
    Card,
    makeStyles,
    Grid,
} = MaterialUI;

const { useDispatch, } = ReactRedux;

const { connect, } = ReactRedux;
const { Field, FieldArray, reduxForm, formValueSelector } = ReduxForm;

let Content = ({ response, view, setView, handleSubmit }) => {

    const dispatch = useDispatch();

    const updateStore = (data) => {
        dispatch({ type: "CHANGE_ALL", payload: data });
    };

    useEffect(() => {
        updateStore(response);
    }, [])

    return (
        <Container>
            <form name='form-SiteDashbaordForm' onSubmit={handleSubmit}>                
                {view == 'Dashboard' && <MenuSystem navigation={setView} />}
                {view == 'Training Preferences' && <FieldArray name="TrainingPreferences" component={TrainingPreferences} />}
                {view == 'User Management' && <FieldArray name="TrainingPreferences" component={UserManagement} />}
                {view == 'Grade Center' && <GradeCenter />}
                {view == 'Exercise Completion' && <ExerciseCompletion />}
                {view == 'Reports' && <Reports />}
                {view == 'Course Navigation' && <CourseNavigation />}
                {view == 'All Answer Keys' && <AnswerKeys />}
                {view == 'Help' && <Help />}
            </form>
        </Container>
    );
};

Content = reduxForm({
    form: 'SiteDashboard',  // a unique identifier for this form
    validate,
})(Content)

const selector = formValueSelector("SiteDashbaordForm");

Content = connect((state) => {
    return { state: state };
})(Content);