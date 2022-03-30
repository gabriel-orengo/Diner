import classes from "./UserPortal.module.css";
import Menu from "../../../components/Menu/Menu";
import Carousel from "../../../components/Carousel/Carousel";

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
