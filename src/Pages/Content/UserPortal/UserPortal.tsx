import classes from "./UserPortal.module.css";
import { Carousel, Menu } from "../../../components";

/**
 * UserPortal component to display for the user
 * @returns UserPortal component
 */
const UserPortal = () => {
	return (
		<div className={classes.UserPortal}>
			<Carousel />
			<Menu />
		</div>
	);
};

export default UserPortal;
