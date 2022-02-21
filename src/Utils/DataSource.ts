type FoodType = "Breakfast" | "Lunch" | "Dinner";

interface MenuItem {
    key: number;
    name: string;
    type: FoodType;
    description: string;
}

let menuItems: MenuItem[] = [
    {
        key: 0,
        name: "Eggs",
        type: "Breakfast",
        description: "Scrambled Eggs with melted cheese inside.",
    },
    { key: 1, name: "Pancakes", type: "Breakfast", description: "testDesc" },
    { key: 2, name: "Bacon", type: "Breakfast", description: "testDesc" },
    {
        key: 3,
        name: "French Toast",
        type: "Breakfast",
        description: "testDesc",
    },
    {
        key: 4,
        name: "Garlic Breadsticks",
        type: "Lunch",
        description: "testDesc",
    },
    { key: 5, name: "Pizza", type: "Dinner", description: "testDesc" },
    { key: 6, name: "Hot Pockets", type: "Dinner", description: "testDesc" },
];

export { menuItems };
