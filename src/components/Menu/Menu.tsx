import React from "react";
import classes from "./Menu.module.css";
import MenuItem from "./MenuItem/MenuItem";
import { menuItems } from "../../Utils/DataSource";

const Menu = () => {
    let list = menuItems.map((item) => {
        return (
            <MenuItem
                name={item.name}
                type={item.type}
                description={item.description}
            />
        );
    });
    return <div className={classes.Menu}>{list}</div>;
};

export default Menu;
