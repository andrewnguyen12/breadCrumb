import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Button} from "@mui/material"
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {withRouter} from "../hooks/with-router";
import Page from "./Page";
import {
    Route,
    Routes,
    MemoryRouter,
    useLocation,
} from 'react-router-dom';
import Link from "@mui/material/Link";

const breadcrumbNameMap: { [key: string]: string } = {
    '/myname': 'MyName',
    '/myname/filea': 'File A',
    '/myname/fileb': 'File B',
    '/myname/projects': 'Projects',
    '/myname/projects/mysupersecretproject': 'My Super Secret Project',
    '/myname/projects/mysupersecretproject/mysupersecretfile': 'My Super Secret File',
};



function ListItemLink(props) {
    const {history} = props;
    const { to, open, ...other } = props;
    const primary = breadcrumbNameMap[to];

    let icon = null;
    if (open != null) {
        icon = open ? <ExpandLess /> : <ExpandMore />;
    }

    return (
        /*React router with prop forwarding */
        <li>
            <ListItem button component={RouterLink} to={to} onClick={() =>{history.push(to)}} {...other}>
                <ListItemText primary={primary} />
                {icon}
            </ListItem>
        </li>
    );
}

ListItemLink.propTypes = {
    open: PropTypes.bool,
    to: PropTypes.string.isRequired,
};



export default function Breadcrumb(props) {
    const [open, setOpen] = React.useState(true);
    const [openProject, setOpenProject] = React.useState(true);
    const [openSecret, setOpenSecret] = React.useState(true);

    const handleClick = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClickProject = () => {
        setOpenProject((prevOpen) => !prevOpen);
    };

    const handleClickSecret = () => {
        setOpenSecret((prevOpen) => !prevOpen);
    };

    return (
        //sx=4 is the indentation property
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: 360 }}>
                <Routes>
                    <Route path="*" element={<Page />} />
                </Routes>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        mt: 1,
                    }}
                    component="nav"
                    aria-label="mailbox folders"
                >
                    <List>
                        <ListItemLink to="/myname" open={open} onClick={handleClick} />
                        <Collapse component="li" in={open} timeout="auto" unmountOnExit>
                            <List disablePadding>
                                <ListItemLink sx={{ pl: 4 }} to="/myname/filea" />
                                <ListItemLink sx={{ pl: 4 }} to="/myname/fileb" />
                                <ListItemLink to="/myname/projects" open={openProject} onClick={handleClickProject} />
                                <Collapse component="li" in={openProject} timeout="auto" unmountOnExit>
                                    <List disablePadding>
                                        <ListItemLink sx={{ pl: 4 }} to="/myname/projects/mysupersecretproject" onClick={handleClickSecret} />
                                        <Collapse component="li" in={openSecret} timeout="auto" unmountOnExit>
                                            <List disablePadding>
                                                <ListItemLink sx={{ pl: 4 }} to="/myname/projects/mysupersecretproject/mysupersecretfile" />
                                            </List>
                                        </Collapse>
                                    </List>
                                </Collapse>
                            </List>
                        </Collapse>
                    </List>

                </Box>
            </Box>
        </MemoryRouter>
    );
}