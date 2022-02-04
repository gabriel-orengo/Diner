import React, { useState } from "react";

import classes from "./Header.module.css";
import credit from "../../images/coin.png";
import cart from "../../images/shopping-cart.png";
import account from "../../images/account.png";
import CartDrawer from "../../components/CartDrawer/CartDrawer";

enum Navigation {
    CREDITS,
    ACCOUNT,
    CART,
}

const Header = (props: any) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const drawerHandler = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <div className={classes.Header}>
            <p className={classes.Logo}>Gabe's Diner ({props.portal})</p>
            <div className={classes.HeaderItems}>
                <img src={credit} title="Credits" height={25} />
                <img src={account} title="Account" height={25} />
                <img
                    src={cart}
                    title="Shopping Cart"
                    height={25}
                    onClick={() => {
                        drawerHandler();
                    }}
                />
            </div>
            {openDrawer ? <CartDrawer handler={() => drawerHandler()} /> : ""}
        </div>
    );
};

const handleItem = (item: number) => {
    if (item === Navigation.CREDITS) alert("Credits has been selected.");
    if (item === Navigation.ACCOUNT) alert("Account has been selected.");
    if (item === Navigation.CART) alert("Cart has been selected.");
};

export default Header;
