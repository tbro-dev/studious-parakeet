//https://nodejs.org/en/knowledge/HTTP/servers/how-to-serve-static-files/

//https://material-ui.com/premium-themes/onepirate/
/*
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
*/
const { ThemeProvider, CssBaseline, Typography } = MaterialUI;

let Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppAppBar />
      <ProductHero />
      {/* 
          <ProductValues />
          <ProductCategories />
          <ProductHowItWorks />
          <ProductCTA />
          <ProductSmokingHero />
          <AppFooter />
        */}
    </ThemeProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
