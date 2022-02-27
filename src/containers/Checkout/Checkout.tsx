import classes from "./Checkout.module.css";
import { useCart } from "../../Utils/CartContext";
import List from "../Common/List/List";
import Button from "../Common/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../Common/Modal/Modal";

const Checkout = () => {
    // Get the cart context
    const cartContext = useCart();
    const [showModal, setShowModal] = useState(false);

    // Get cart from session storage
    let cartUI = cartContext.cart.map((item: any) => {
        return (
            <List key={item.key}>
                <div className={classes.Content}>
                    <div>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Cost: ${item.totalCost.toFixed(2)}</p>
                    </div>
                    <div className={classes.ButtonAlignment}>
                        <Button
                            type="alert"
                            shape="circle"
                            action={() => {
                                cartContext.removeItem(item);
                            }}>
                            Remove
                        </Button>
                    </div>
                </div>
            </List>
        );
    });

    return (
        <div className={classes.Checkout}>
            <p>Let's review your order!</p>
            {cartUI.length !== 0 ? (
                cartUI
            ) : (
                <p className={classes.EmptyMessage}>
                    Cart appears to be empty.
                </p>
            )}
            {cartUI.length !== 0 ? (
                <div className={classes.MarginTopAuto}>
                    <Button
                        type="strong"
                        shape="circle"
                        action={() => setShowModal(!showModal)}>
                        Place Order
                    </Button>
                </div>
            ) : (
                <Button disabled type="strong" shape="circle">
                    Place Order
                </Button>
            )}
            {showModal ? (
                <Modal handler={() => setShowModal(!showModal)}>
                    <div className={classes.Modal}>
                        <h2>Ready to place your order?</h2>
                        <p>Total Cost: ${cartContext.totalCost.toFixed(2)}</p>
                        <div className={classes.Buttons}>
                            <Button
                                type="secondary"
                                shape="circle"
                                action={() => setShowModal(!showModal)}>
                                No
                            </Button>
                            <Link to="/" className={classes.Link}>
                                <Button
                                    type="strong"
                                    shape="circle"
                                    action={cartContext.clearCart}>
                                    Yes
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Modal>
            ) : (
                ""
            )}
        </div>
    );
};

export default Checkout;
