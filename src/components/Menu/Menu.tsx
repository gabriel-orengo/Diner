import classes from "./Menu.module.css";
import { menuItems } from "../../Utils/DataSource";
import { useCart } from "../../Utils/CartContext";
import Button from "../../containers/Common/Button/Button";
import Card from "../../containers/Common/Card/Card";

/**
 * Menu component
 * @returns Menu component
 */
const Menu = () => {
	// Get the cart context
	const cartContext = useCart();

	const getQuantity = (item: any) => {
		for (let i = 0; i < cartContext.cart.length; i++) {
			const element: any = cartContext.cart[i];
			if (item.name === element.name) {
				return element.quantity;
			}
		}
		return null;
	};

	// List of menu items
	let list = menuItems.map((item) => {
		return (
			<Card key={item.key}>
				<div className={classes.Content}>
					<div>
						<h4>{item.name}</h4>
						<p>{item.description}</p>
						<p>Cost: ${item.cost.toFixed(2)}</p>
					</div>
					<div className={classes.ButtonAlignment}>
						{getQuantity(item) ? (
							<>
								<Button
									type="secondary"
									shape="oval"
									action={() => {
										cartContext.removeItem(item);
									}}>
									<span className={classes.Minus}></span>
								</Button>
								{getQuantity(item)}
							</>
						) : (
							""
						)}
						<Button
							type="secondary"
							shape="oval"
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
	return <div className={classes.Menu}>{list}</div>;
};

export default Menu;
