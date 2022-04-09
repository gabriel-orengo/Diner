import classes from "./Carousel.module.css";
import { useState } from "react";
import { menuItems } from "../../Utils/DataSource";
import CarouselItem from "./CarouselItem/CarouselItem";

/**
 * Carousel component to display the featured items at the home page
 * @returns Carousel component
 */
const Carousel = () => {
	let featuredItems = menuItems.filter((item) => item.featured === true);
	const [activeItem, setActiveItem] = useState(featuredItems[0]);
	const featuredItemUI = (
		<CarouselItem active={activeItem} item={activeItem} />
	);

	// Setup UI for featured item dots
	let dots = featuredItems.map((item) => {
		let classNames;
		if (item.name === activeItem.name) {
			classNames = [classes.Dot, classes.Active];
		} else {
			classNames = [classes.Dot];
		}

		return (
			<div
				key={item.key}
				className={classNames.join(" ")}
				onClick={() => setActiveItem(item)}></div>
		);
	});

	// Function to set the activeItem to the next item
	const nextItem = () => {
		let newCarouselItems = [...featuredItems];
		for (let i = 0; i < newCarouselItems.length; i++) {
			if (newCarouselItems[i].name === activeItem.name) {
				if (i === newCarouselItems.length - 1) {
					i = 0;
					setActiveItem(newCarouselItems[i]);
				} else {
					setActiveItem(newCarouselItems[i + 1]);
				}
				break;
			}
		}
	};

	// Function to set the activeItem to the previous item
	const prevItem = () => {
		let newCarouselItems = [...featuredItems];
		for (let i = newCarouselItems.length - 1; i >= 0; i--) {
			if (newCarouselItems[i].name === activeItem.name) {
				if (i === 0) {
					setActiveItem(
						newCarouselItems[newCarouselItems.length - 1]
					);
				} else {
					setActiveItem(newCarouselItems[i - 1]);
				}
				break;
			}
		}
	};

	return (
		<div className={classes.Carousel}>
			{featuredItemUI}
			<div className={classes.Controls}>
				<div className={classes.Left} onClick={prevItem}></div>
				<div className={classes.Dots}>{dots}</div>
				<div className={classes.Right} onClick={nextItem}></div>
			</div>
		</div>
	);
};

export default Carousel;
