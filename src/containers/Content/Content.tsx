import classes from "./Content.module.css";
import { Outlet } from "react-router-dom";

/**
 * Content component displays the main content in the application
 * @returns Content component
 */
const Content = (props: any) => {
	return (
		<div className={classes.Content}>
			<Outlet />
		</div>
	);
};

export default Content;
