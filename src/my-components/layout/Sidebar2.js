import React from "react";
import Drawer from "@material-ui/core/Drawer/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import {Link as RouterLink} from "react-router-dom";
import PropTypes from "prop-types";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ListIcon from "@material-ui/icons/List";
import {connect} from "react-redux";
import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import {loadCSS} from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import ForumIcon from '@material-ui/icons/Forum';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import VideocamIcon from '@material-ui/icons/Videocam';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Delete from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import ReportIcon from '@material-ui/icons/Report';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: "auto",
    },
    listItemTitle: {
        /*   color: theme.palette.text.back, */
        /*   color: 'blue', */
        fontWeight: '900',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const RenderLink = (to) => React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
);

function CollapseListItemLink(props) {
    const {primary, listTo, parentIcon, id, open2, handleClick2, index, handleListItemClickExpand, selectedIndexOpen} = props;

    const open3 = index === selectedIndexOpen;
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClick = () => {
        setOpen(!open);
    };

    const getItem = (item, index) => {
        if (item.show) {
            return (
                <ListItem
                    key={index}
                    button
                    component={RenderLink(item.to)}
                    className={classes.nested}
                >
                    {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : null}
                    <ListItemText primary={item.text}/>
                </ListItem>
            );
        }
        return null;
    };

    return (
        <>
            <ListItem button onClick={() => handleListItemClickExpand(index)}>
                {parentIcon ? <ListItemIcon>{parentIcon}</ListItemIcon> : null}
                <ListItemText primary={primary}/>
                {/*  {open2 ? <ExpandLess /> : <ExpandMore />} */}
                {open3 ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={open3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {listTo.map((item, index) => getItem(item, index))}
                </List>
            </Collapse>
        </>
    );
}

function ListItemLink(props) {
    const {icon, primary, to} = props;

    const renderLink = React.useMemo(
        () =>
            React.forwardRef((itemProps, ref) => (
                <RouterLink to={to} ref={ref} {...itemProps} />
            )),
        [to]
    );

    return (
        <li>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary}/>
            </ListItem>
        </li>
    );
}

ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

function Sidebar2(props) {
    const classes = useStyles();
    // 0 means no one open
    const [selectedIndexOpen, setSelectedIndexOpen] = React.useState(0);
    // https://material-ui.com/components/lists/#selected-listitem
    const [selectedIndex, setSelectedIndex] = React.useState(2);
    const [listMenu, setListMenu] = React.useState([
        {
            id: 1,
            open2: false
        },
        {
            id: 2,
            open2: false
        }
    ]);

    React.useEffect(() => {
        const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );

        return () => {
            node.parentNode.removeChild(node);
        };
    }, []);

    const handleListItemClickExpand = (index) => {
        if (index === selectedIndexOpen) {
            // so we close CollapseListItemL here because it is the same index
            setSelectedIndexOpen(0);
        } else {
            // here we open the CollapseListItem     
            setSelectedIndexOpen(index);
        }
    };

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const handleClick2 = (id) => {
        const item = listMenu.find(link => link.id === id);
        if (!item.open2) {
            const newArray = listMenu.map(link => link.id === id ? {...link, open2: true} : {...link, open2: false});
            setListMenu(newArray);
        } else {
            const newArray = listMenu.map(link => link.id === id ? {...link, open2: false} : link);
            setListMenu(newArray);
        }
    };

    const projectLink = [
        {
            to: "/project",
            text: "Projets",
            icon: <ListIcon/>,
            show: true,
        },
        {
            to: "/project/create",
            text: "Ajouter un projet",
            icon: <AddCircleIcon/>,
            show: props.showCreateProject,
        },
    ];

    // <Icon className="fas fa-table" />
    // or
    // <ListIcon />
    const sprintLink = [
        {
            to: "/sprint",
            text: "Sprints",
            icon: <Icon className="fas fa-table"/>,
            show: true,
        },
        {
            to: "/sprint/calendar",
            text: "Calendrier",
            icon: <CalendarTodayIcon/>,
            show: true,
        },
    ];

    const taskLink = [
        {
            to: "/task",
            text: "Taches",
            icon: <ListIcon/>,
            show: true,
        },
    ];

    const discussionLink = [
        {
            to: "/discussion",
            text: "Discussions",
            icon: <ListIcon/>,
            show: true,
        },
    ];

    //  <Icon className="far fa-grin-hearts" />
    // or
    //  <Icon className="fas fa-grin-hearts" />
    //old one
    // <Icon className="fas fa-dizzy" />
    const documentLink = [
        {
            to: "/document?status=AC",
            text: "Acuels",
            icon: <CheckCircleIcon/>,
            show: true,
        },
        {
            to: "/document?status=EX",
            text: "Périmes",
            icon: <Delete/>,
            show: true,
        },
    ];

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar/>

            <div className={classes.drawerContainer}>
                <Box
                    display="flex"
                    flexDirection="column"
                >
                    <Box
                        alignItems="center"
                        display="flex"
                        flexDirection="column"
                        p={3}
                    >
                        <Avatar
                            className={classes.avatar}
                            component={RouterLink}
                            src={props.user.userProfile &&
                            props.user.userProfile.photo ? props.user.userProfile.photo : ""}
                            to="/"
                        />
                        <Typography
                            className={classes.name}
                            color="textPrimary"
                            variant="h5"
                        >
                            {props.user.username}
                        </Typography>
                        {/*<Typography*/}
                        {/*    color="textSecondary"*/}
                        {/*    variant="body2"*/}
                        {/*>*/}
                        {/*    {"slim"}*/}
                        {/*</Typography>*/}
                    </Box>
                </Box>
                <Divider/>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.root}
                >
                    <ListItem
                        component={RenderLink('/')}
                        button>
                        <ListItemIcon>
                            <DashboardIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
                    </ListItem>
                    <ListItem button
                              component={RenderLink('/project')}>
                        <ListItemIcon>
                            <Icon className="fab fa-r-project"/>
                        </ListItemIcon>
                        <ListItemText className={classes.listItemTitle} primary="Projects"/>
                    </ListItem>
                    <CollapseListItemLink {...listMenu[0]}
                                          selectedIndexOpen={selectedIndexOpen}
                                          handleListItemClickExpand={handleListItemClickExpand}
                                          index={1}
                                          handleClick2={handleClick2}
                                          primary="Sprint" parentIcon={<VideocamIcon/>} listTo={sprintLink}/>
                    <ListItem component={RenderLink('/task')} button>
                        <ListItemIcon>
                            <Icon className="fas fa-tasks"/>
                        </ListItemIcon>
                        <ListItemText primary="Taches"/>
                    </ListItem>
                    <CollapseListItemLink
                        selectedIndexOpen={selectedIndexOpen}
                        handleListItemClickExpand={handleListItemClickExpand}
                        index={2}
                        handleClick2={handleClick2}
                        parentIcon={<DescriptionIcon/>} primary="Document" listTo={documentLink} {...listMenu[1]} />
                    <ListItem component={RenderLink('/discussion')} button>
                        <ListItemIcon>
                            <ForumIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Discussion"/>
                    </ListItem>
                    <ListItem
                        component={RenderLink('/note')}
                        button>
                        <ListItemIcon>
                            <NoteAddIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Notes"/>
                    </ListItem>
                    <ListItem component={RenderLink('/problem')} button>
                        <ListItemIcon>
                            <ReportIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Problèms"/>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(Sidebar2);
