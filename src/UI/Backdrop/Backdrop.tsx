import classes from "./Backdrop.module.css";
import { useEffect, useState } from "react";

/**
 * Backdrop component used behind Modal and CartDrawer components
 * @param props
 * @returns Backdrop component
 */
const Backdrop = (props: any) => {
	// Animation state
	const [animation, setAnimation] = useState(0);

	// Set animation on display
	useEffect(() => {
		props.display ? setAnimation(1) : setAnimation(0);
	}, [props.display]);

	return (
		<div
			className={classes.Backdrop}
			data-animation={animation}
			onClick={props.action}></div>
	);
};

export default Backdrop;
