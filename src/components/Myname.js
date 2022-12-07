import {withRouter} from "../hooks/with-router"
import {Button} from "@mui/material"
import {useNavigate, Link, useLocation} from "react-router-dom";
import classes from "./Myname.module.css";
import Card from "../UI/Card";

const Myname = () =>
{

    const navigate = useNavigate();
    return(
        <Card className={classes.header}>
            <Button className={classes.folder} onClick={() => {navigate('/myname/projects')}}>Projects</Button>
            <ul>
                <Link className={classes.file} to="/myname/filea.txt"> filea.txt </Link>
                <Link className={classes.file} to="/myname/fileb.txt"> fileb.txt </Link>
            </ul>

        </Card>
    )
}
export default withRouter(Myname);