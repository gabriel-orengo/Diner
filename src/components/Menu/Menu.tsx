import classes from "./Menu.module.css";
import { menuItems } from "../../Utils/DataSource";
import { useCart } from "../../Utils/CartContext";
import Button from "../../containers/Common/Button/Button";
import List from "../../containers/Common/List/List";

const Menu = () => {
    // Get the cart context
    const cartContext = useCart();

    // List of menu items
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
                                cartContext.addItem(item);
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
