import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

/**
 * Footer component to be displayed at the foot of every page
 * @returns Footer component
 */
const Footer = () => {
	return (
		<div className={classes.Footer}>
			<p>
				<Link to="/credits">Click</Link> to see the credits for the
				icons and images.
			</p>
		</div>
	);
};

export default Footer;
