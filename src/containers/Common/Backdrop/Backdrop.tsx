import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = (props: any) => {
    return <div className={classes.Backdrop} onClick={props.action}></div>;
};

export default Backdrop;
