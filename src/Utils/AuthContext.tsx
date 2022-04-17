import React, { useContext, useState } from "react";
import { auth } from "../Utils/firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

// @ts-ignore
const AuthContext = React.createContext({
	currentUser: auth?.currentUser,
	register: (email: string, password: string) => {},
	login: (email: string, password: string) => {},
	logout: () => {},
});

// Custom hook to use authentication
export const useAuth = () => {
	return useContext(AuthContext);
};

// AuthProvider Function
export const AuthProvider = (props: any) => {
	const [currentUser, setCurrentUser] = useState(auth?.currentUser);

	onAuthStateChanged(auth, (currentUser) => {
		setCurrentUser(currentUser);
	});

	const register = async (email: string, password: string) => {
		const userCredentials = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		setCurrentUser(userCredentials.user);
	};

	const login = async (email: string, password: string) => {
		const userCredentials = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		setCurrentUser(userCredentials.user);
	};

	const logout = async () => {
		await signOut(auth);
		setCurrentUser(auth?.currentUser);
	};

	const authContext = {
		currentUser,
		register,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={authContext}>
			{props.children}
		</AuthContext.Provider>
	);
};
