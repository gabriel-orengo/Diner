import { useState } from "react";
import classes from "./AccountDrawer.module.css";
import { Link } from "react-router-dom";
import Button from "../../containers/Common/Button/Button";
import Drawer from "../../containers/Common/Drawer/Drawer";

/**
 * AccountDrawer component to display the drawer for account settings
 * @param props Properties to be passed into the AccountDrawer component
 * @returns AccountDrawer component
 */
const AccountDrawer = (props: any) => {
	const [isSignedIn, setSignedIn] = useState(false);

	return (
		<Drawer handler={props.handler} display={props.display}>
			<p>What would you like to do today</p>
			{
				// TODO Debug!! Remove when ready
			}
			<p onClick={() => setSignedIn(!isSignedIn)}>
				Signed in status: {isSignedIn ? "Signed In" : "Not Signed In"}
			</p>
			{
				// TODO End of debug
			}
			{isSignedIn ? (
				<div>
					<Link to="/account" className={classes.Link}>
						<Button
							type="strong"
							shape="oval"
							action={props.handler}>
							{"My Account"}
						</Button>
					</Link>
					<Link to="/" className={classes.Link}>
						<Button
							type="strong"
							shape="oval"
							action={props.handler}>
							{"Log Out"}
						</Button>
					</Link>
				</div>
			) : (
				<div>
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
