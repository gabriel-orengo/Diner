import React from "react";

import classes from "./Banner.module.css";
import credit from "../../images/coin.png";
import cart from "../../images/shopping-cart.png";
import account from "../../images/account.png";

enum Navigation {
    CREDITS,
    ACCOUNT,
    CART,
}

const Banner = (props: any) => {
    return (
        <div className={classes.Banner}>
            <p className={classes.Logo}>Gabe's Diner ({props.portal})</p>
            <div className={classes.BannerItems}>
                <img src={credit} title="Shopping Cart" height={25} />
                <img src={account} title="Shopping Cart" height={25} />
                <img src={cart} title="Shopping Cart" height={25} />
            </div>
        </div>
    );
};

const handleItem = (item: number) => {
    if (item === Navigation.CREDITS) alert("Credits has been selected.");
    if (item === Navigation.ACCOUNT) alert("Account has been selected.");
    if (item === Navigation.CART) alert("Cart has been selected.");
};

export default Banner;
