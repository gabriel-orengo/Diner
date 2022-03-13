import classes from "./CartDrawer.module.css";
import { useCart } from "../../Utils/CartContext";
import Button from "../../containers/Common/Button/Button";
import Backdrop from "../../containers/Common/Backdrop/Backdrop";
import { Link } from "react-router-dom";
import Card from "../../containers/Common/Card/Card";

/**
 * Cart Drawer component
 * @param props Properties that were passed to the component
 * @returns CartDrawer component
 */
const CartDrawer = (props: any) => {
	// Get the cart context
	const cartContext = useCart();

	// Get cart from session storage
	let cartUI = cartContext.cart.map((item: any) => {
		return (
			<Card key={item.key}>
				<div className={classes.Content}>
					<div>
						<h4>{item.name}</h4>
						{/* <p>Quantity: {item.quantity}</p> */}
						<p>Cost: ${item.totalCost.toFixed(2)}</p>
					</div>
					<div className={classes.ButtonAlignment}>
						<Button
							type="secondary"
							shape="circle"
							action={() => {
								cartContext.removeItem(item);
							}}>
							<span className={classes.Minus}></span>
						</Button>
						{item.quantity}
						<Button
							type="secondary"
							shape="circle"
							action={() => {
								cartContext.addItem(item);
							}}>
							<span className={classes.Plus}></span>
						</Button>
					</div>
				</div>
			</Card>
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
								shape="oval"
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
						<Button disabled type="strong" shape="oval">
							Checkout
						</Button>
					</div>
				)}
			</div>
		</>
	);
};

export default CartDrawer;
