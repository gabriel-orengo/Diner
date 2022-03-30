import classes from "./Footer.module.css";

/**
 * Footer component to be displayed at the foot of every page
 * @returns Footer component
 */
const Footer = () => {
	return (
		<div className={classes.Footer}>
			<p>Below are the credits for the icons and images.</p>
			<div className={classes.Credits}>
				<a
					href="https://www.flaticon.com/free-icons/user"
					title="user icons">
					User icons created by Bombasticon Studio - Flaticon
				</a>
				<a
					href="https://www.flaticon.com/free-icons/cart"
					title="cart icons">
					Cart icons created by Freepik - Flaticon
				</a>
				<a
					href="https://www.flaticon.com/free-icons/coin"
					title="coin icons">
					Coin icons created by Freepik - Flaticon
				</a>
				Photo by{" "}
				<a
					href="https://unsplash.com/@coffeefyworkafe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					title="eggs">
					Coffeefy Workafe
				</a>{" "}
				on{" "}
				<a href="https://unsplash.com/s/photos/eggs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
					Unsplash
				</a>
				Photo by{" "}
				<a
					href="https://unsplash.com/@iavnt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					title="pizza">
					Ivan Torres
				</a>{" "}
				on{" "}
				<a href="https://unsplash.com/s/photos/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
					Unsplash
				</a>
				Photo by{" "}
				<a
					href="https://unsplash.com/@picoftasty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					title="pancakes">
					Mae Mu
				</a>{" "}
				on{" "}
				<a href="https://unsplash.com/s/photos/pancakes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
					Unsplash
				</a>
				Photo by{" "}
				<a
					href="https://unsplash.com/@wrightbrand?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					title="bacon">
					Wright Brand Bacon
				</a>{" "}
				on{" "}
				<a href="https://unsplash.com/s/photos/bacon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
					Unsplash
				</a>
				Photo by{" "}
				<a
					href="https://unsplash.com/@kristinhillery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
					title="french toast">
					Kristin Hillery
				</a>{" "}
				on{" "}
				<a href="https://unsplash.com/s/photos/french-toast?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
					Unsplash
				</a>
			</div>
		</div>
	);
};

export default Footer;
