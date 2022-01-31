import React from "react";
import classes from "./MenuItem.module.css";

const MenuItem = (props: any) => {
    return (
        <div className={classes.MenuItem}>
            <div className={classes.image}>
                <img
                    src="https://plchldr.co/i/150x70?&bg=eeeeee&fc=000000"
                    title="placeholder"
                />
            </div>
            <div className={classes.Data}>
                <div>
                    <p>{props.name}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
