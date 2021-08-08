const {
    Hidden,
    CssBaseline,
    createMuiTheme,
    Typography,
    ThemeProvider,
    Link,
    makeStyles,
    CardMedia,
    Card,
    CardActionArea
} = MaterialUI;

const { Provider, } = ReactRedux;

const {
    useState,
    useEffect,
    styles,
    useRef,
} = React;

const drawerWidth = 175;

let Base = () => {

    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [listResponse, setResponse] = useState([]);
    const [view, setView] = useState('Dashboard');

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const retreiveSettings = () => {

        /* declare object to hold block scope data */
        let allData = {};

        /* Get user data from SP */
        let user = Promise.resolve(getUserSP());

        user.then(data => {

            allData.user = data;

            /* Get user Registration from SP lists */
            let reg = getUserReg(data.EMail, 'CSR Basic');

            reg.then(data => {

                allData.userReg = data;

                /* Get site settings based on user registration */
                let site = getSiteSettings(data[0].Site);

                site.then(data => {
                    debugger
                    allData.site = data;

                    /* Get all users for a site, course, and their role */
                    let allUsers = getAllUsers(allData.site[0].Title, 'CSR Basic', allData.userReg[0].UserRole);
                    allUsers.then(data => {
                        allData.allUsers = data;

                        /* Get all test attempts for a site that need grading */
                        let testAttempts = getTestAttemptsNeedsGrading(allData.site[0].Title);

                        testAttempts.then(data => {
                            
                            allData.allUngradedTests = data;
                            
                            setResponse(allData);
                            setLoading(false);
                        })
                    })                    
                })
            });
        })
    }

    useEffect(() => {
        setLoading(true);
        retreiveSettings();
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <Provider store={reStore}>
                    {/* spinner while async action is in place */}
                    {loading && <div className="loaderMaker"></div>}

                    {/* once async action is in place */}
                    {!loading && <nav className={classes.drawer}>
                        <Hidden smUp implementation="js">
                            <Navigation
                                PaperProps={{ style: { width: drawerWidth } }}
                                variant="temporary"
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                setView={setView}
                            />
                        </Hidden>
                        <Hidden xsDown implementation="css">
                            <Navigation setView={setView} PaperProps={{ style: { width: drawerWidth } }} />
                        </Hidden>
                    </nav>}
                    {!loading && <div className={classes.app}>
                        <Header view={view} onDrawerToggle={handleDrawerToggle} />
                        <main className={classes.main}>
                            <Content response={listResponse} view={view} setView={setView} />
                        </main>
                    </div>}
                </Provider>
            </div>
        </ThemeProvider>
    );
}

