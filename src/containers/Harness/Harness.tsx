import React from "react";
import Footer from "../Footer/Footer";
import classes from "./Harness.module.css";
import UserPortal from "./UserPortal/UserPortal";

const Harness = (props: any) => {
    return (
        <div className={classes.Harness}>
            <UserPortal />
            <Footer />
        </div>
    );
};

export default Harness;
