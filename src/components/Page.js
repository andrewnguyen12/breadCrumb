import {withRouter} from "../hooks/with-router";

//Breadcrumb component
import {Link as RouterLink, useLocation, useNavigate} from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Link from "@mui/material/Link";


const breadcrumbNameMap: { [key: string]: string } = {
    '/myname': 'MyName',
    '/myname/filea.txt': 'File A',
    '/myname/fileb.txt': 'File B',
    '/myname/projects': 'Projects',
    '/myname/projects/mysupersecretproject': 'My Super Secret Project',
    '/myname/projects/mysupersecretproject/mysupersecretfile.txt': 'My Super Secret File',
};

function LinkRouter(props) {
    return <Link {...props} component={RouterLink} />;
}

function Page() {
    const navigate = useNavigate();
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    console.log(pathnames);
    return (
        /*Make the first element of the Breadcrumb Home */
        <Breadcrumbs separator = ">" aria-label="breadcrumb">
            <LinkRouter underline="hover" color="inherit" to="/">
                Home
            </LinkRouter>
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return last ? (
                    <Typography color="text.primary" key={to} >
                        {breadcrumbNameMap[to]}
                    </Typography>
                ) : (
                    <LinkRouter underline="hover" color="inherit" to={to} onClick={() => {navigate(to)}} key={to}>
                        {breadcrumbNameMap[to]}
                    </LinkRouter>
                );
            })}
        </Breadcrumbs>
    );
}

export default withRouter(Page);