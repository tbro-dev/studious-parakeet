const {
    createMuiTheme,
    makeStyles,
} = MaterialUI;

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({

    /* Base Module */
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    app: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        flex: 1,
        padding: theme.spacing(6, 0),
    },


    /* Navigation Module */
    categoryHeader: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white,
    },
    item: {
        paddingTop: 1,
        paddingBottom: 1,
        color: 'rgb(191 191 191)',
        '&:hover,&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
    },
    itemActiveItem: {
        color: '#4fc3f7',
    },
    itemPrimary: {
        fontSize: 'inherit',
    },
    itemIcon: {
        minWidth: 'auto',
        marginRight: theme.spacing(2),
    },
    divider: {
        marginTop: theme.spacing(2),
    },
    navigationListItemTypography: {
        color: '#ffe307',
    },


    /* Content Module */
    contentCard: {
        backgroundColor: '#f1f1f1',
    },


    /* Header Module */
    headerAppBar: {
        backgroundColor: '#FFE307',
    },
    headerAppBarTitle: {
        color: '#262629',
    },

    /* Training Preferences */
    trainingPreferencesCard: {
        minWidth: 275,
    },
    trainingPreferencesTypoTitle: {
        fontSize: 14,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    
    /* Table styles */
    tableExtend: {
        overflowX : 'auto',
    },
    
    /*  */
    linkSpace: {
        margin: theme.spacing(1, 1.5),
        color: '#3e3e3e',

    },
}));
