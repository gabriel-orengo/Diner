import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Content from "./containers/Content/Content";
import Checkout from "./containers/Checkout/Checkout";
import Account from "./containers/Account/Account";
import Login from "./containers/Login/Login";
import SignUp from "./containers/SignUp/SignUp";
import UserPortal from "./containers/Content/UserPortal/UserPortal";
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
