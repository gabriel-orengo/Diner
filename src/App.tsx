import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header, Footer } from "./components";
import { Account, Checkout, Content, Login, SignUp, UserPortal } from "./Pages";
import { useAuth } from "./Utils/AuthContext";

const App = () => {
	const { currentUser } = useAuth();

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Content />}>
					<Route index element={<UserPortal />} />
					<Route path="/checkout" element={<Checkout />} />
					{currentUser == null ? (
						<>
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<SignUp />} />
						</>
					) : (
						<Route path="/account" element={<Account />} />
					)}
					<Route
						path="*"
						element={<Navigate to="/" replace={true} />}
					/>
				</Route>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
