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

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Index />);