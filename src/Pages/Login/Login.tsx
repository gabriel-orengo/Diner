import classes from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Utils/AuthContext";
import { determineError } from "../../Utils/FirebaseErrors";
import { Button, ErrorMessage, Input } from "../../UI";

/**
 * Login component to display the log in screen
 * @returns Login component
 */
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { login } = useAuth();
	const navigate = useNavigate();

	// Confirm if the login is successful
	const confirmLogin = async (email: string, password: string) => {
		try {
			setError("");
			await login(email, password);
			navigate("/", { replace: true });
		} catch (error: any) {
			setError(determineError(error.message));
		}
	};

	return (
		<div className={classes.Login}>
			<div className={classes.Form}>
				<h2>Log in</h2>
				{error !== "" ? <ErrorMessage message={error} /> : ""}
				<form>
					<Input
						label="Email"
						type="email"
						id="email"
						title="email"
						autoComplete="off"
						required
						onChange={(event: any) => setEmail(event.target.value)}
					/>
					<Input
						label="Password"
						type="password"
						title="password"
						autoComplete="off"
						required
						onChange={(event: any) =>
							setPassword(event.target.value)
						}
					/>
				</form>

				<Button
					type="strong"
					shape="oval"
					action={() => confirmLogin(email, password)}>
					Log In
				</Button>
			</div>
			<p>
				Don't have an account?{" "}
				<span
					className={classes.Switch}
					onClick={() => navigate("/signup", { replace: true })}>
					Sign Up
				</span>
			</p>
		</div>
	);
};

export default Login;
