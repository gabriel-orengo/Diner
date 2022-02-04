import React from "react";
import Footer from "../Footer/Footer";
import classes from "./Content.module.css";
import UserPortal from "./UserPortal/UserPortal";

const Content = (props: any) => {
    return (
        <div className={classes.Content}>
            <UserPortal />
        </div>
    );
};

export default Content;
