import { Link } from "react-router-dom";
import logoImage from "../../static/logo.png";

import classes from "./Logo.module.css";

function Logo() {
    return (
        <Link to="/" className={classes.logo}>
            <img className={classes.imageInLogo} src={logoImage} alt="Logo-coffee" />
        </Link>
    );
}

export default Logo;