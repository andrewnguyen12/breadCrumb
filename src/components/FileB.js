import {withRouter} from "../hooks/with-router";
import {useLocation} from "react-router-dom";
const FileB = () =>
{
    const location = useLocation();
    const to = location.pathname.split("/").filter(x => x);
    return(
        <p>THIS IS {to[to.length - 1]}</p>
    )
}
export default withRouter(FileB);