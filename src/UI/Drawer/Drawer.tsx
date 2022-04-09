import classes from "./Drawer.module.css";
import { useEffect, useState } from "react";
import { Backdrop } from "..";

/**
 * Drawer component that displays a drawer where needed
 * @param props Properties passed into the Drawer component
 * @returns Drawer component
 */
const Drawer = (props: any) => {
	// Animation state
	const [animation, setAnimation] = useState(0);

	// Get props.display
	const [display, setDisplay] = useState(props.display);

	// Set animation on display
	useEffect(() => {
		display ? setAnimation(1) : setAnimation(0);
	}, [display]);

	// Function to run closing animation and remove the component
	const removeComponent = () => {
		// Run closing animation
		setDisplay(false);

		// Allows time to run the animation, then removes component
		setTimeout(props.handler, 400);
	};

	return (
		<>
			<Backdrop action={removeComponent} display={display} />
			<div className={classes.Drawer} data-animation={animation}>
				{props.children}
			</div>
		</>
	);
};

export default Drawer;
