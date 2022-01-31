import React from "react";
import classes from "./UserPortal.module.css";
import Menu from "../../../components/Menu/Menu";

const UserPortal = () => {
    return (
        <div className={classes.UserPortal}>
            <p>Below are the options for the menu.</p>
            <Menu />
        </div>
    );
};

export default UserPortal;
