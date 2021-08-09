const { styled, Toolbar } = MaterialUI;

const AppToolbar = styled(Toolbar)(({ theme }) => ({
  height: 64,
  [theme.breakpoints.up("sm")]: {
    height: 70,
  },
}));
