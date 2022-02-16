import React from "react";
import classes from "./Menu.module.css";
import MenuItem from "./MenuItem/MenuItem";
import { menuItems } from "../../Utils/DataSource";

const Menu = () => {
    const addToCart = (item: any) => {
        // Get the cart from session storage if it exists
        let cartArray = JSON.parse(sessionStorage.getItem("cart") || "[]");
        console.log(cartArray);

        let newItem = { ...item, id: cartArray.length + 1, quantity: 1 };

        // Add item to the cart array
        cartArray.push(newItem);

        console.log(cartArray);

        // Set the cart array in the session storage
        sessionStorage.setItem("cart", JSON.stringify(cartArray));
    };

    let list = menuItems.map((item) => {
        return (
            <MenuItem
                addToCart={() => {
                    addToCart(item);
                }}
                key={item.key}
                name={item.name}
                type={item.type}
                description={item.description}
            />
        );
    });
    return <div className={classes.Menu}>{list}</div>;
};

export default Menu;
