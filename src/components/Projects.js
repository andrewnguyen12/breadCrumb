import {withRouter} from "../hooks/with-router";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import classes from "./Projects.module.css"

const Projects = () =>
{
    const navigate = useNavigate();
    return (
        <section>
            <h1>This is the project folder</h1>
            <Button className={classes.folder} onClick={() => {navigate('/myname/projects/mysupersecretproject')}}>My Super Secret Project</Button>
        </section>
    )
}

export default withRouter(Projects);