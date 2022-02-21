import { useState } from "react";
import classes from "./Header.module.css";
import { useCart } from "../../Utils/CartContext";
import { Link } from "react-router-dom";
import credit from "../../images/coin.png";
import cart from "../../images/shopping-cart.png";
import account from "../../images/account.png";
import CartDrawer from "../../components/CartDrawer/CartDrawer";

const Header = (props: any) => {
    // Create state for opening the cart drawer
    const [openDrawer, setOpenDrawer] = useState(false);

    // Get the cart context
    const cartContext = useCart();

    // Toggle the cart drawer
    const drawerHandler = () => {
        setOpenDrawer(!openDrawer);
    };

    // Get the total number of items from the cart
    const getQuantity = (cartArray: any) => {
        let quantity: number = 0;

        // Loop through array items to get the quantity of items
        for (let i = 0; i < cartArray.length; i++) {
            quantity += cartArray[i].quantity;
        }

        return quantity;
    };

    return (
        <div className={classes.Header}>
            <p className={classes.Logo}>
                <Link to="/" className={classes.Link}>
                    Gabe's Diner ({props.portal})
                </Link>
            </p>
            <div className={classes.HeaderItems}>
                <img src={credit} title="Credits" height={25} alt="Credits" />
                <img src={account} title="Account" height={25} alt="Account" />
                <div className={classes.Cart}>
                    <img
                        src={cart}
                        title="Shopping Cart"
                        alt="Cart"
                        height={25}
                        onClick={() => {
                            drawerHandler();
                        }}
                    />
                    {cartContext.cart.length !== 0 ? (
                        <div
                            className={classes.CartNotification}
                            onClick={() => {
                                drawerHandler();
                            }}>
                            {getQuantity(cartContext.cart)}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            {openDrawer ? <CartDrawer handler={() => drawerHandler()} /> : ""}
        </div>
    );
};

export default Header;
