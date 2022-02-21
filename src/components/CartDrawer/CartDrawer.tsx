import classes from "./CartDrawer.module.css";
import { useCart } from "../../Utils/CartContext";
import Button from "../../containers/Common/Button/Button";
import List from "../../containers/Common/List/List";
import Backdrop from "../../containers/Common/Backdrop/Backdrop";

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
