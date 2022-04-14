import classes from "./SuccessMessage.module.css";

/**
 * SuccessMessage component to display a success message to the user
 * @param props Properties to pass into the SuccessMessage component
 * @returns SuccessMessage component
 */
const SuccessMessage = (props: any) => {
	return <div className={classes.SuccessMessage}>{props.message}</div>;
};

export default SuccessMessage;
