import { useState } from "react";
import classes from "./Header.module.css";
import { useCart } from "../../Utils/CartContext";
import { Link } from "react-router-dom";
import cart from "../../images/shopping-cart.png";
import account from "../../images/account.png";
import AccountDrawer from "../../components/AccountDrawer/AccountDrawer";
import CartDrawer from "../../components/CartDrawer/CartDrawer";

/**
 * Header component to display at the top of every page
 * @param props Properties to pass to the Header component
 * @returns Header component
 */
const Header = (props: any) => {
	// Constants
	const CART = "cart";
	const ACCOUNT = "account";

	// Create state for opening the cart drawer
	const [openAccountDrawer, setOpenAccountDrawer] = useState(false);

	// Create state for opening the cart drawer
	const [openCartDrawer, setOpenCartDrawer] = useState(false);

	// Get the cart context
	const cartContext = useCart();

	// Toggle the cart drawer
	const drawerHandler = (drawerType: string) => {
		switch (drawerType) {
			case CART:
				setOpenCartDrawer(!openCartDrawer);
				break;
			case ACCOUNT:
				setOpenAccountDrawer(!openAccountDrawer);
				break;
		}
	};

	return (
		<div className={classes.Header}>
			<p className={classes.Logo}>
				<Link to="/" className={classes.Link}>
					<span>Gabe's Diner</span>
				</Link>
			</p>
			<div className={classes.HeaderItems}>
				<div className={classes.Cart}>
					<img
						src={account}
						title="Account"
						height={25}
						alt="Account"
						onClick={() => drawerHandler(ACCOUNT)}
					/>
				</div>
				<div className={classes.Cart}>
					<img
						src={cart}
						title="Shopping Cart"
						alt="Cart"
						height={25}
						onClick={() => drawerHandler(CART)}
					/>
					{cartContext.cart.length !== 0 ? (
						<div
							className={classes.CartNotification}
							onClick={() => {
								drawerHandler(CART);
							}}>
							{cartContext.totalQuantity}
						</div>
					) : (
						""
					)}
				</div>
			</div>
			{openCartDrawer && (
				<CartDrawer
					handler={() => drawerHandler(CART)}
					display={openCartDrawer}
				/>
			)}
			{openAccountDrawer && (
				<AccountDrawer
					handler={() => drawerHandler(ACCOUNT)}
					display={openAccountDrawer}
				/>
			)}
		</div>
	);
};

export default Header;
