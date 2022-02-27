import classes from "./CartDrawer.module.css";
import { useCart } from "../../Utils/CartContext";
import Button from "../../containers/Common/Button/Button";
import List from "../../containers/Common/List/List";
import Backdrop from "../../containers/Common/Backdrop/Backdrop";
import { Link } from "react-router-dom";

const CartDrawer = (props: any) => {
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
        <>
            <Backdrop action={props.handler} />
            <div className={classes.CartDrawer}>
                {cartUI.length !== 0 ? (
                    cartUI
                ) : (
                    <p className={classes.EmptyMessage}>
                        Looks a little empty here...
                    </p>
                )}

                {cartUI.length !== 0 ? (
                    <div className={classes.MarginTopAuto}>
                        <div>
                            Total Cost: ${cartContext.totalCost.toFixed(2)}
                        </div>
                        <Link to="/checkout" className={classes.Link}>
                            <Button
                                type="strong"
                                shape="circle"
                                action={props.handler}>
                                Checkout
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <div>
                            Total Cost: ${cartContext.totalCost.toFixed(2)}
                        </div>
                        <Button disabled type="strong" shape="circle">
                            Checkout
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
