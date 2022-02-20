import classes from "./Menu.module.css";
import { menuItems } from "../../Utils/DataSource";
import Button from "../../containers/Common/Button/Button";
import List from "../../containers/Common/List/List";

const Menu = () => {
    const addToCart = (item: any) => {
        // Get the cart from session storage if it exists
        let cartArray = JSON.parse(sessionStorage.getItem("cart") || "[]");

        // Find the item in the cart if it exists
        const elementIndex = cartArray.findIndex(
            (element: any) => element.name == item.name
        );

        // Check if item already exists
        if (elementIndex != -1) {
            // Update the current item's quantity
            cartArray[elementIndex] = {
                ...cartArray[elementIndex],
                quantity: cartArray[elementIndex].quantity + 1,
            };
        } else {
            // Set up new item
            let newItem = { ...item, id: cartArray.length + 1, quantity: 1 };

            // Add item to the cart array
            cartArray.push(newItem);
        }

        // Set the cart array in the session storage
        sessionStorage.setItem("cart", JSON.stringify(cartArray));
    };

    let list = menuItems.map((item) => {
        return (
            <List key={item.key}>
                <div className={classes.Content}>
                    <div>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                    </div>
                    <div className={classes.ButtonAlignment}>
                        <Button
                            type="strong"
                            shape="circle"
                            action={() => {
                                addToCart(item);
                            }}>
                            Add
                        </Button>
                    </div>
                </div>
            </List>
        );
    });
    return <div className={classes.Menu}>{list}</div>;
};

export default Menu;
