import classes from "./CarouselItem.module.css";

/**
 * CarouselItem component to display the featured item in the Carousel component
 * @param props Properties passed into the CarouselItem component
 * @returns CarouselItem component
 */
const CarouselItem = (props: any) => {
	return (
		<div className={classes.CarouselItem}>
			<div className={classes.Content}>
				<p>Featured Items:</p>
				<p>{props.item.name}</p>
				<p>${props.item.cost.toFixed(2)}</p>
			</div>
			<img
				className={classes.Image}
				src={props.item.image}
				alt={props.altText}
			/>
		</div>
	);
};

export default CarouselItem;
