const {
    AppBar,
    Typography,
    Grid,
    Toolbar,
    makeStyles,
    Container,
    Box,
    IconButton,
    Icon,
    Hidden,
} = MaterialUI;


let Header = ({ view, onDrawerToggle }) => {

    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.headerAppBar} position="static">
                <Toolbar>
                        <Hidden smUp>
                                <IconButton
                                    color="default"
                                    aria-label="open drawer"
                                    onClick={onDrawerToggle}
                                    className={classes.menuButton}
                                >
                                    <Icon>menu</Icon>
                                </IconButton>
                        </Hidden>
                    <Typography className={classes.headerAppBarTitle} variant='h5'>Facilitator Dashboard: {view == 'Dashboard' ? 'Home' : view}</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};