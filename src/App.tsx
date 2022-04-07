import { Routes, Route } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./Utils/CartContext";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Content from "./containers/Content/Content";
import Checkout from "./containers/Checkout/Checkout";
import Account from "./containers/Account/Account";
import Login from "./containers/Login/Login";
import SignUp from "./containers/SignUp/SignUp";

const App = () => {
	let portal = "User";

	return (
		<CartProvider>
			<div className="App">
				<Header portal={portal} />
				<Routes>
					<Route path="/" element={<Content portal={portal} />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/account" element={<Account />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
				<Footer />
			</div>
		</CartProvider>
	);
};

export default App;
