import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <a
                href="https://www.flaticon.com/free-icons/user"
                title="user icons">
                User icons created by Bombasticon Studio - Flaticon
            </a>
            <a
                href="https://www.flaticon.com/free-icons/cart"
                title="cart icons">
                Cart icons created by Freepik - Flaticon
            </a>
            <a
                href="https://www.flaticon.com/free-icons/coin"
                title="coin icons">
                Coin icons created by Freepik - Flaticon
            </a>
        </div>
    );
};

export default Footer;
