//https://www.pluralsight.com/guides/how-to-wire-up-redux-form-bindings-to-the-form%27s-inputs

const {
  AppBar,
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Hidden,
  Toolbar,
  Typography,
  TextField,
  makeStyles,
  Container,
  Link,
  Icon,
  createMuiTheme,
  ThemeProvider,
} = MaterialUI;

const { Provider, } = ReactRedux;

const { useState, } = React;
const { render, } = ReactDOM;

function App() {
  const [appState, setAppState] = useState({ result: null });

  const setResult = (values) => {
    setAppState({ result: JSON.stringify(values, null, 2) });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <br />
        <Container>
          <Card>
            <Provider store={reStore}>
              <div className="App">
                <QuizForm onSubmit={setResult} />
                <QuizFormResult result={appState.result} />
              </div>
            </Provider>
          </Card>
        </Container>
      </ThemeProvider>
    </>
  );
}


render(
  <App />,
  document.getElementById("root")
);