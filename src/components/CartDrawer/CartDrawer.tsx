import React, { useEffect, useState } from "react";
import classes from "./CartDrawer.module.css";
import CartDrawerItem from "./CartDrawerItem/CartDrawerItem";

const CartDrawer = (props: any) => {
    // Use state for the cart
    const [cart, setCart] = useState([]);

    // Get cart from session storage
    let cartArray = JSON.parse(sessionStorage.getItem("cart") || "[]");
    let cartUI = cartArray.map((item: any) => {
        return (
            <CartDrawerItem
                name={item.name}
                description={item.description}
                removeItem={() => {
                    removeItem(item.id);
                }}
            />
        );
    });

    // ! Must use id in the future, otherwise repeats will be removed
    // TODO Replace name param with an id param
    const removeItem = (id: number) => {
        console.log(id);
        let cartArray = JSON.parse(sessionStorage.getItem("cart") || "[]");
        let newArray = cartArray.filter((obj: any) => {
            return obj.id !== id;
        });

        // Set the cart state to the new array
        setCart(newArray);

        // Set the cart key to the cart state
        sessionStorage.setItem("cart", JSON.stringify(newArray));
    };

    return (
        <>
            <div className={classes.Backdrop} onClick={props.handler}></div>
            <div className={classes.CartDrawer}>
                <div className={classes.Content}>
                    <p>This is the drawer</p>
                    {cartUI}
                    <button className={classes.Submit}>Submit</button>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
