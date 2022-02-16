import React from "react";
import classes from "./MenuItem.module.css";

const MenuItem = (props: any) => {
    return (
        <div
            className={classes.MenuItem}
            onClick={() => {
                props.addToCart();
            }}>
            <div>
                <p>{props.name}</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default MenuItem;
