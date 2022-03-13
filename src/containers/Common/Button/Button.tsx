import classes from "./Button.module.css";

/**
 * Button component
 * @returns Button component
 */
const Button = (props: any) => {
	// Variables determined by the props
	let buttonType = `${classes.Button}`;
	let buttonShape: String;

	// Switch case to determine the button's type
	switch (props.type) {
		case "strong": {
			buttonType += ` ${classes.Strong}`;
			break;
		}
		case "alert": {
			buttonType += ` ${classes.Alert}`;
			break;
		}
		case "secondary": {
			buttonType += ` ${classes.Secondary}`;
			break;
		}
		default: {
			buttonType = classes.Button;
			break;
		}
	}

	// Switch case to determine the button's shape
	switch (props.shape) {
		case "oval": {
			buttonShape = `${classes.Oval}`;
			break;
		}
		case "circle": {
			buttonShape = `${classes.Circle}`;
			break;
		}
		case "square": {
			buttonShape = `${classes.Square}`;
			break;
		}
		case "rounded": {
			buttonShape = `${classes.Rounded}`;
			break;
		}
		default: {
			buttonShape = classes.Square;
			break;
		}
	}

	let isDisabled = props.disabled ? `${classes.Disabled}` : "";

	// Array of classes to join in the className
	let buttonStyle = [buttonType, buttonShape, isDisabled];

	return (
		<div className={buttonStyle.join(" ")} onClick={props.action}>
			{props.children}
		</div>
	);
};
export default Button;
