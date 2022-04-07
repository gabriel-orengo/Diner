import Button from "../Common/Button/Button";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";

/**
 * Login component to display the log in screen
 * @returns Login component
 */
const Login = () => {
	return (
		<div className={classes.Login}>
			<div className={classes.Form}>
				<h2>Log in</h2>
				<form
					onSubmit={() => {
						console.log("Submitted");
					}}>
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
				</form>

				<Button
					type="strong"
					shape="oval"
					action={() => console.log("Handle Submit")}>
					Log In
				</Button>
			</div>
			<p>
				Don't have an account?{" "}
				<Link to="/signup" className={classes.Link}>
					<span className={classes.Switch}>Sign Up</span>
				</Link>
			</p>
		</div>
	);
};

export default Login;
