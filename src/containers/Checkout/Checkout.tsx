import classes from "./Checkout.module.css";
import { useCart } from "../../Utils/CartContext";
import List from "../Common/List/List";
import Button from "../Common/Button/Button";
import { Link } from "react-router-dom";

const Checkout = () => {
    // Get the cart context
    const cartContext = useCart();

    // Get cart from session storage
    let cartUI = cartContext.cart.map((item: any) => {
        return (
            <List key={item.key}>
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
            {cartUI.length !== 0 ? (
                cartUI
            ) : (
                <p className={classes.EmptyMessage}>
                    Cart appears to be empty.
                </p>
            )}
            {cartUI.length !== 0 ? (
                <div className={classes.MarginTopAuto}>
                    <Link to="/" className={classes.Link}>
                        <Button type="strong" shape="circle">
                            Place Order
                        </Button>
                    </Link>
                </div>
            ) : (
                <Button disabled type="strong" shape="circle">
                    Place Order
                </Button>
            )}
        </div>
    );
};

export default Checkout;
