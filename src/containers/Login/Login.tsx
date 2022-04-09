import classes from "./Login.module.css";
import Button from "../Common/Button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Utils/AuthContext";

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

	const confirmLogin = async (email: string, password: string) => {
		try {
			setError("");
			await login(email, password);
			navigate("/", { replace: true });
		} catch (error: any) {
			if (error.message.includes("invalid-email")) {
				setError("Invalid Email");
			} else if (error.message.includes("wrong-password")) {
				setError("Wrong Password");
			} else if (error.message.includes("user-not-found")) {
				setError("User does not exist");
			} else {
				setError(error.message);
			}
		}
	};

	const errorMessage = <div className={classes.ErrorMessage}>{error}</div>;

	return (
		<div className={classes.Login}>
			<div className={classes.Form}>
				<h2>Log in</h2>
				{error !== "" ? errorMessage : ""}
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
							onChange={(event) => setEmail(event.target.value)}
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
							onChange={(event) =>
								setPassword(event.target.value)
							}
						/>
					</div>
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
