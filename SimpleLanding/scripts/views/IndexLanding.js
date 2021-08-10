//https://nodejs.org/en/knowledge/HTTP/servers/how-to-serve-static-files/

const { ThemeProvider, CssBaseline, Typography, Container } = MaterialUI;

let Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing />
    </ThemeProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
