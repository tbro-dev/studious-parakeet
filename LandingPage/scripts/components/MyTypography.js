const { withStyles, Typography } = MaterialUI;

debugger;

let MyTypography = (props) => {
  const { children, variant, ...other } = props;

  return (
    <Typography variant={variant} {...other}>
      {children}
    </Typography>
  );
};
