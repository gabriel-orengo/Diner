import React, { useState } from "react";

import classes from "./Header.module.css";
import credit from "../../images/coin.png";
import cart from "../../images/shopping-cart.png";
import account from "../../images/account.png";
import CartDrawer from "../../components/CartDrawer/CartDrawer";

const Header = (props: any) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const drawerHandler = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <div className={classes.Header}>
            <p className={classes.Logo}>Gabe's Diner ({props.portal})</p>
            <div className={classes.HeaderItems}>
                <img src={credit} title="Credits" height={25} alt="Credits" />
                <img src={account} title="Account" height={25} alt="Account" />
                <img
                    src={cart}
                    title="Shopping Cart"
                    alt="Cart"
                    className={classes.Cart}
                    height={25}
                    onClick={() => {
                        drawerHandler();
                    }}
                />
                {JSON.parse(sessionStorage.getItem("cart") || "[]").length !==
                0 ? (
                    <div
                        className={classes.CartNotification}
                        onClick={() => {
                            drawerHandler();
                        }}></div>
                ) : (
                    ""
                )}
            </div>
            {openDrawer ? <CartDrawer handler={() => drawerHandler()} /> : ""}
        </div>
    );
};

export default Header;
