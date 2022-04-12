export const determineError = (error: string) => {
	if (error.includes("invalid-email")) {
		return "Invalid Email";
	} else if (error.includes("wrong-password")) {
		return "Wrong Password";
	} else if (error.includes("weak-password")) {
		return "Password should be at least 6 characters long";
	} else if (error.includes("user-not-found")) {
		return "User does not exist";
	} else if (error.includes("too-many-requests")) {
		return "Too many failed attempts. Try again later.";
	} else if (error.includes("email-already-exists")) {
		return "Email already exists. Must enter a new email.";
	} else {
		return error;
	}
};
