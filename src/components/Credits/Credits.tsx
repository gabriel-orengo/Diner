import classes from "./Credits.module.css";

/**
 * Credits component to display the source of the icons and photos used in the application.
 * @returns Credits component
 */
const Credits = () => {
	return (
		<div className={classes.Credits}>
			<section>
				<h2>Photos</h2>
				<p>
					Eggs Photo by{" "}
					<a
						href="https://unsplash.com/@coffeefyworkafe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
						title="Eggs">
						Coffeefy Workafe
					</a>{" "}
					on{" "}
					<a
						href="https://unsplash.com/s/photos/eggs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
						title="Unsplash">
						Unsplash
					</a>
				</p>
				<p>
					Pizza Photo by{" "}
					<a
						href="https://unsplash.com/@iavnt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
						title="Pizza">
						Ivan Torres
					</a>{" "}
					on{" "}
					<a
						href="https://unsplash.com/s/photos/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
						title="Unsplash">
						Unsplash
					</a>
				</p>
				<p>
					Pancakes Photo by{" "}
					<a
						href="https://unsplash.com/@picoftasty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
						title="Pancakes">
						Mae Mu
					</a>{" "}
					on{" "}
					<a
						href="https://unsplash.com/s/photos/pancakes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
						title="Unsplash">
						Unsplash
					</a>
				</p>
				<p>
					Bacon Photo by{" "}
					<a
						href="https://unsplash.com/@wrightbrand?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
						title="Bacon">
						Wright Brand Bacon
					</a>{" "}
					on{" "}
					<a
						href="https://unsplash.com/s/photos/bacon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
						title="Unsplash">
						Unsplash
					</a>
				</p>
				<p>
					French Toast Photo by{" "}
					<a
						href="https://unsplash.com/@kristinhillery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
						title="French Toast">
						Kristin Hillery
					</a>{" "}
					on{" "}
					<a
						href="https://unsplash.com/s/photos/french-toast?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
						title="Unsplash">
						Unsplash
					</a>
				</p>
			</section>
			<section>
				<h2>Icons</h2>
				<a
					href="https://www.flaticon.com/free-icons/user"
					title="User Icon">
					User icon created by Bombasticon Studio - Flaticon
				</a>
				<a
					href="https://www.flaticon.com/free-icons/cart"
					title="Cart Icon">
					Cart icon created by Freepik - Flaticon
				</a>
			</section>
		</div>
	);
};

export default Credits;
