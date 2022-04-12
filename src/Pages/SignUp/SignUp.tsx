import classes from "./SignUp.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Utils/AuthContext";
import { determineError } from "../../Utils/FirebaseErrors";
import { Button, ErrorMessage } from "../../UI";

/**
 * SignUp component to display the sign up screen
 * @returns SignUp component
 */
const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const { register } = useAuth();
	const navigate = useNavigate();

	const confirmSignUp = async (
		email: string,
		password: string,
		confirmPassword: string
	) => {
		if (password !== confirmPassword)
			return setError("Passwords do not match!");

		try {
			setError("");
			await register(email, password);
			navigate("/", { replace: true });
		} catch (error: any) {
			setError(determineError(error.message));
		}
	};

	return (
		<div className={classes.SignUp}>
			<div className={classes.Form}>
				<h2>Sign Up</h2>
				{error !== "" ? <ErrorMessage message={error} /> : ""}
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
							onChange={(event) => {
								setEmail(event?.target.value);
							}}
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
							onChange={(event) => {
								setPassword(event.target.value);
							}}
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
							onChange={(event) => {
								setConfirmPassword(event.target.value);
							}}
						/>
					</div>
				</form>
				<Button
					type="strong"
					shape="oval"
					action={() =>
						confirmSignUp(email, password, confirmPassword)
					}>
					Sign Up
				</Button>
			</div>
			<p>
				Already have an account?{" "}
				<span
					className={classes.Switch}
					onClick={() => navigate("/login", { replace: true })}>
					Log In
				</span>
			</p>
		</div>
	);
};

export default SignUp;
