const { createStore, combineReducers } = Redux;

const { reducer } = ReduxForm;

const rootReducer = combineReducers({
  form: reducer,
});

//reStore is called in <Provider store={reStore}> under App.js
const reStore = createStore(rootReducer);
