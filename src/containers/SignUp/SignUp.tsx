import Button from "../Common/Button/Button";
import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";

/**
 * SignUp component to display the sign up screen
 * @returns SignUp component
 */
const SignUp = () => {
	return (
		<div className={classes.SignUp}>
			<div className={classes.Form}>
				<h2>Sign Up</h2>
				<form onSubmit={() => console.log("Submitted")}>
					<div>
						<p>
							Email:<span className={classes.Required}>*</span>
						</p>
						<input
							type="email"
							id="email"
							title="email"
							autoComplete="off"
							required
						/>
					</div>
					<div>
						<p>
							Password:<span className={classes.Required}>*</span>
						</p>
						<input
							type="password"
							title="password"
							autoComplete="off"
							required
						/>
					</div>
					<div>
						<p>
							Confirm Password:
							<span className={classes.Required}>*</span>
						</p>
						<input
							type="password"
							title="password"
							autoComplete="off"
							required
						/>
					</div>
				</form>
				<Button
					type="strong"
					shape="oval"
					action={() => console.log("Handle Submit")}>
					Sign Up
				</Button>
			</div>
			<p>
				Already have an account?{" "}
				<Link to="/login" className={classes.Link}>
					<span className={classes.Switch}>Log In</span>
				</Link>
			</p>
		</div>
	);
};

export default SignUp;
