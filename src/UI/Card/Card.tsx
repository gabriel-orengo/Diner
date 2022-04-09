import classes from "./Card.module.css";

/**
 * Card component to display data in a card
 * @param props Properties to be passed into the Card component
 * @returns Card component
 */
const Card = (props: any) => {
	return (
		<div className={classes.Card} onClick={props.action}>
			{props.title ? <h3>{props.title}</h3> : ""}
			{props.children}
		</div>
	);
};

export default Card;
