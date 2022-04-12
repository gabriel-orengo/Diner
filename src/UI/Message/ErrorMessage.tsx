import classes from "./ErrorMessage.module.css";

/**
 * ErrorMessage component to display a success message to the user
 * @param props Properties to pass into the ErrorMessage component
 * @returns ErrorMessage component
 */
const ErrorMessage = (props: any) => {
	return <div className={classes.ErrorMessage}>{props.message}</div>;
};

export default ErrorMessage;
