import React from "react";
import classes from "./CartDrawerItem.module.css";

const CartDrawerItem = (props: any) => {
    return (
        <div
            className={classes.CartDrawerItem}
            onClick={() => {
                props.removeItem();
            }}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default CartDrawerItem;
