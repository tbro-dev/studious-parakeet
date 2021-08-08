const {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Icon,
    makeStyles,
} = MaterialUI;

const categories = [
    {
        id: 'Services',
        children: [
            {
                id: 'Training Preferences', icon: <Icon>room_preferences</Icon>
            },
            {
                id: 'User Management', icon: <Icon>manage_accounts</Icon>
            },
            {
                id: 'Grade Center', icon: <Icon>grading</Icon>
            },
            /*
            {
                id: 'Exercise Completion', icon: <Icon>quiz</Icon>
            }, 
            */
            {
                id: 'Reports', icon: <Icon>show_chart</Icon>
            },
            {
                id: 'Course Navigation', icon: <Icon>summarize</Icon>
            },
            /*
            {
                id: 'All Answer Keys', icon: <Icon>vpn_key</Icon>
            },
             {
                id: 'Help', icon: <Icon>help</Icon>
            },
             */
        ],
    },
];


let Navigation = (props) => {

    const { setView, ...other } = props;

    debugger

    const classes = useStyles();

    return (

        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem button className={classes.navigationListItemTypography} onClick={() => setView("Dashboard")}>
                    <ListItemIcon><Icon>home</Icon></ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItem>
                <Divider className={classes.divider} />
                {categories.map(({ id, children }) => (
                    <React.Fragment key={id}>
                        <ListItem className={classes.categoryHeader}>
                            <ListItemText
                                classes={{
                                    primary: classes.categoryHeaderPrimary,
                                }}>
                                {id}
                            </ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, active }) => (
                            <ListItem
                                key={childId}
                                button
                                className={clsx(classes.item, active && classes.itemActiveItem)}
                                onClick={() => setView(childId)}
                            >
                                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.itemPrimary,
                                    }}>
                                    {childId}
                                </ListItemText>
                            </ListItem>
                        ))}
                        <Divider className={classes.divider} />
                    </React.Fragment>
                ))}
            </List>
        </Drawer>
    );
}
