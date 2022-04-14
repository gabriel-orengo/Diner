import classes from "./Input.module.css";

/**
 * Input component to display any input element with consistent styling
 */
const Input = (props: any) => {
	return (
		<div className={classes.Input}>
			<p>
				{props.label}:
				{props.required ? (
					<span className={classes.Required}>*</span>
				) : (
					""
				)}
			</p>
			<input
				type={props.type}
				id={props.id}
				title={props.title}
				autoComplete="off"
				onChange={props.action}
			/>
		</div>
	);
};

export default Input;
