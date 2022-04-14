import classes from "./Account.module.css";
import { useEffect, useState } from "react";
import { Button, ErrorMessage, Input, Modal, SuccessMessage } from "../../UI";
import { useAuth } from "../../Utils/AuthContext";
import { determineError } from "../../Utils/FirebaseErrors";
import {
	deleteUser,
	EmailAuthProvider,
	reauthenticateWithCredential,
	updateEmail,
	updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

/**
 * Account component to display the Account settings
 * @returns Account component
 */
const Account = () => {
	const { currentUser } = useAuth();
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [displayName, setDisplayName] = useState(currentUser?.displayName);
	const [email, setEmail] = useState(currentUser?.email);
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const navigate = useNavigate();
	const credential = EmailAuthProvider.credential(
		currentUser?.email as string,
		password
	);

	// Handle saving the display name and email updates
	const saveData = async (
		displayName: string | null | undefined,
		email: string | null | undefined
	) => {
		setError("");
		setSuccess("");

		if (password === "") {
			setError("Must enter password");
			return;
		}
		try {
			await reauthenticateWithCredential(currentUser!, credential);
		} catch (error: any) {
			setError(determineError(error.message));
		}

		// If there is an error, don't continue
		if (error !== "") return;

		// Check if the display name has a value
		if (displayName !== "") {
			try {
				await updateProfile(currentUser!, { displayName: displayName });
				setSuccess("User data has been updated");
			} catch (error: any) {
				setError(determineError(error.message));
			}
		}

		// Check if email has a valid value before updating the email address for the user
		if (email !== "" || email !== null || email !== undefined) {
			try {
				await updateEmail(currentUser!, email ?? "");
				setSuccess("User data has been updated");
			} catch (error: any) {
				setError(determineError(error.message));
			}
		}
	};

	// Handle deleting the user account
	const deleteCurrentUser = async () => {
		try {
			await reauthenticateWithCredential(currentUser!, credential);
		} catch (error: any) {
			setError(determineError(error.message));
		}

		// If there is an error, don't continue
		if (error !== "") return;

		try {
			await deleteUser(currentUser!);
			navigate("/", { replace: true });
		} catch (error: any) {
			setError(determineError(error.message));
		}
	};

	// When currentUser is updated, the email and display name are also updated
	useEffect(() => {
		setEmail(currentUser?.email);
		setDisplayName(currentUser?.displayName);
	}, [currentUser]);

	// When the email and display name are updated, the UI elements are also updated
	useEffect(() => {
		let emailElement = document.getElementById("email");
		emailElement?.setAttribute("value", email ?? "");
		let displayElement = document.getElementById("displayName");
		displayElement?.setAttribute("value", displayName ?? "");
	}, [email, displayName]);

	return (
		<div className={classes.Account}>
			<div className={classes.Form}>
				<h2>My Account</h2>
				{success !== "" && error === "" ? (
					<SuccessMessage message={success} />
				) : (
					""
				)}
				{error !== "" ? <ErrorMessage message={error} /> : ""}
				<form>
					<Input
						label="Display Name"
						type="text"
						id="displayName"
						title="display"
						action={(event: any) =>
							setDisplayName(event.target.value)
						}
					/>
					<Input
						label="Email"
						type="email"
						id="email"
						title="email"
						action={(event: any) => setEmail(event.target.value)}
					/>
					<Input
						label="Password"
						type="password"
						id="password"
						title="password"
						required
						action={(event: any) => setPassword(event.target.value)}
					/>
				</form>
				<Button
					type="strong"
					shape="oval"
					action={() => saveData(displayName, email)}>
					Save
				</Button>
				<Button
					type="alert"
					shape="oval"
					action={() => setShowDeleteModal(!showDeleteModal)}>
					Delete Account
				</Button>
			</div>
			{showDeleteModal && (
				<Modal
					handler={() => setShowDeleteModal(!showDeleteModal)}
					display={showDeleteModal}>
					<p>
						Are you sure you want to delete your account? This is a
						permanent action.
					</p>
					<div>
						<form>
							<Input
								label="Password"
								type="password"
								id="modalPassword"
								title="password"
								required
								action={(event: any) =>
									setPassword(event.target.value)
								}
							/>
						</form>
					</div>
					<div className={classes.ButtonAlignment}>
						<Button
							type="secondary"
							shape="oval"
							action={() => {
								setShowDeleteModal(!showDeleteModal);
							}}>
							Cancel
						</Button>
						<Button
							type="alert"
							shape="oval"
							action={() => {
								deleteCurrentUser();
							}}>
							Delete
						</Button>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default Account;
