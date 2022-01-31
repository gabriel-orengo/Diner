type FoodType = "Breakfast" | "Lunch" | "Dinner";

interface MenuItem {
    name: string;
    type: FoodType;
    description: string;
}

let menuItems: MenuItem[] = [
    {
        name: "Eggs",
        type: "Breakfast",
        description: "Scrambled Eggs with melted cheese inside.",
    },
    { name: "Pancakes", type: "Breakfast", description: "testDesc" },
    { name: "Bacon", type: "Breakfast", description: "testDesc" },
    { name: "French Toast", type: "Breakfast", description: "testDesc" },
    { name: "Garlic Breadsticks", type: "Lunch", description: "testDesc" },
    { name: "Pizza", type: "Dinner", description: "testDesc" },
];

export { menuItems };
