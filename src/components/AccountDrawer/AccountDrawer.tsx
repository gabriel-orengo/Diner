import classes from "./AccountDrawer.module.css";
import { Link } from "react-router-dom";
import Button from "../../containers/Common/Button/Button";
import Drawer from "../../containers/Common/Drawer/Drawer";
import { useAuth } from "../../Utils/AuthContext";

/**
 * AccountDrawer component to display the drawer for account settings
 * @param props Properties to be passed into the AccountDrawer component
 * @returns AccountDrawer component
 */
const AccountDrawer = (props: any) => {
	const { currentUser, logout } = useAuth();

	return (
		<Drawer handler={props.handler} display={props.display}>
			<p>What would you like to do today</p>
			{currentUser ? (
				<div>
					<p>Hi there, {currentUser.email}!</p>
					<Link to="/account" className={classes.Link}>
						<Button
							type="strong"
							shape="oval"
							action={props.handler}>
							{"My Account"}
						</Button>
					</Link>
					<Link to="/" className={classes.Link}>
						<Button type="strong" shape="oval" action={logout}>
							{"Log Out"}
						</Button>
					</Link>
				</div>
			) : (
				<div>
					<p>Sign In below or continue as a guest.</p>
					<Link to="/login" className={classes.Link}>
						<Button
							type="strong"
							shape="oval"
							action={props.handler}>
							{"Sign Up / Log In"}
						</Button>
					</Link>
				</div>
			)}
		</Drawer>
	);
};

export default AccountDrawer;
