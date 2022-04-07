import { useState } from "react";
import classes from "./Account.module.css";
import Button from "../Common/Button/Button";
import Modal from "../Common/Modal/Modal";

/**
 * Account component to display the Account settings
 * @returns Account component
 */
const Account = () => {
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	// Toggle the confirmation modal
	const toggleConfirmationModal = () => {
		setShowDeleteModal(!showDeleteModal);
	};

	return (
		<div className={classes.Account}>
			<p>My Account</p>
			<Button type="alert" shape="oval" action={toggleConfirmationModal}>
				Delete Account
			</Button>
			{showDeleteModal && (
				<Modal
					handler={toggleConfirmationModal}
					display={showDeleteModal}>
					<p>
						Are you sure you want to delete your account? This is a
						permanent action.
					</p>
					<div className={classes.ButtonAlignment}>
						<Button
							type="secondary"
							shape="oval"
							action={() => {
								console.log("Not deleting");
								toggleConfirmationModal();
							}}>
							Cancel
						</Button>
						<Button
							type="alert"
							shape="oval"
							action={() => {
								console.log("Start deleting");
								toggleConfirmationModal();
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
