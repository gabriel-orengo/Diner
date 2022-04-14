import classes from "./SignUp.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Utils/AuthContext";
import { determineError } from "../../Utils/FirebaseErrors";
import { Button, ErrorMessage, Input } from "../../UI";

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

	// Confirm if the signup is successful
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
				<form>
					<Input
						label="Email"
						type="email"
						id="email"
						title="email"
						autoComplete="off"
						required
						action={(event: any) => setEmail(event.target.value)}
					/>
					<Input
						label="Password"
						type="password"
						title="password"
						autoComplete="off"
						required
						action={(event: any) => setPassword(event.target.value)}
					/>
					<Input
						label="Confirm Password"
						type="password"
						title="password"
						autoComplete="off"
						required
						action={(event: any) =>
							setConfirmPassword(event.target.value)
						}
					/>
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
