import {withRouter} from "../hooks/with-router";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import classes from "./Home.module.css";

const Home = () =>
{
    const navigate = useNavigate();
    return(
        <section>
            <h1> Welcome to the home page</h1>
            <Button className={classes.folder} onClick={() => {navigate('/myname')}}> My Name </Button>
        </section>
    )
}
export default withRouter(Home);


