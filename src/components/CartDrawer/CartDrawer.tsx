import React, { useState } from "react";
import classes from "./CartDrawer.module.css";
import Button from "../../containers/Common/Button/Button";
import List from "../../containers/Common/List/List";
import Backdrop from "../../containers/Common/Backdrop/Backdrop";

const CartDrawer = (props: any) => {
    // Use state for the cart
    const [cart, setCart] = useState([]);

    // Get cart from session storage
    let cartArray = JSON.parse(sessionStorage.getItem("cart") || "[]");
    let cartUI = cartArray.map((item: any) => {
        return (
            <List>
                <div className={classes.Content}>
                    <div>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                    <div className={classes.ButtonAlignment}>
                        <Button
                            type="alert"
                            shape="circle"
                            action={() => {
                                removeItem(item.name);
                            }}>
                            Remove
                        </Button>
                    </div>
                </div>
            </List>
        );
    });

    // ! Update the id to be a unique id. I'm having issues with removing items with the same id
    // Function to remove the selected item
    const removeItem = (name: string) => {
        let cartArray = JSON.parse(sessionStorage.getItem("cart") || "[]");

        // Find the index of the current item
        const elementIndex = cartArray.findIndex((element: any) => {
            return element.name == name;
        });

        // Decrement the quantity of the found item
        cartArray[elementIndex] = {
            ...cartArray[elementIndex],
            quantity: cartArray[elementIndex].quantity - 1,
        };

        // If the item's quantity is 0, remove that item
        if (cartArray[elementIndex].quantity === 0) {
            let newArray = cartArray.filter((element: any) => {
                return element.name !== name;
            });
            setCart(newArray);
            // Set the cart key to the cart state
            sessionStorage.setItem("cart", JSON.stringify(newArray));
        } else {
            setCart(cartArray);
            // Set the cart key to the cart state
            sessionStorage.setItem("cart", JSON.stringify(cartArray));
        }
    };

    return (
        <>
            <Backdrop action={props.handler} />
            <div className={classes.CartDrawer}>
                <p>This is the drawer</p>
                <div>
                    {cartUI}
                    {cartUI.length !== 0 ? (
                        <Button
                            type="strong"
                            shape="circle"
                            action={() => alert("Checkout")}>
                            Checkout
                        </Button>
                    ) : (
                        <Button
                            disabled
                            type="strong"
                            shape="circle"
                            action={() => alert("Checkout")}>
                            Checkout
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
