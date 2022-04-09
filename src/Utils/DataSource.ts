import pizza from "../Assets/images/pizza.jpg";
import eggs from "../Assets/images/eggs.jpg";
import pancakes from "../Assets/images/pancakes.jpg";
import bacon from "../Assets/images/bacon.jpg";
import frenchToast from "../Assets/images/french-toast.jpg";
import dumplings from "../Assets/images/dumplings.jpg";

type FoodType = "Breakfast" | "Lunch" | "Dinner";

interface MenuItem {
	key: number;
	name: string;
	cost: number;
	type: FoodType;
	description: string;
	image: any;
	featured: boolean;
}

let menuItems: MenuItem[] = [
	{
		key: 0,
		name: "Eggs",
		cost: 2.0,
		type: "Breakfast",
		description: "Scrambled Eggs with melted cheese inside.",
		image: eggs,
		featured: true,
	},
	{
		key: 1,
		name: "Pancakes",
		cost: 3.0,
		type: "Breakfast",
		description: "testDesc",
		image: pancakes,
		featured: true,
	},
	{
		key: 2,
		name: "Bacon",
		cost: 2.5,
		type: "Breakfast",
		description: "testDesc",
		image: bacon,
		featured: true,
	},
	{
		key: 3,
		name: "French Toast",
		cost: 3.5,
		type: "Breakfast",
		description: "testDesc",
		image: frenchToast,
		featured: false,
	},
	{
		key: 4,
		name: "Dumplings",
		cost: 2.5,
		type: "Lunch",
		description: "testDesc",
		image: dumplings,
		featured: false,
	},
	{
		key: 5,
		name: "Pizza",
		cost: 5.0,
		type: "Dinner",
		description: "testDesc",
		image: pizza,
		featured: false,
	},
];

export { menuItems };
