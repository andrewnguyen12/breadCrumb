import {withRouter} from "../hooks/with-router";
import {Link} from "react-router-dom"
import Card from "../UI/Card";
import classes from "./MySuperSecretProject.module.css";

const MySuperSecretProject = () =>{
    return(
        <Card>
            <h1>This is My Super Secret Project!</h1>
            <ul>
                <Link className={classes.file} to="/myname/projects/mysupersecretproject/mysupersecretfile.txt">mysupersecretfile.txt</Link>
            </ul>
        </Card>
    )
}

export default withRouter(MySuperSecretProject);