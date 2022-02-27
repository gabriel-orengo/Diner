type FoodType = "Breakfast" | "Lunch" | "Dinner";

interface MenuItem {
    key: number;
    name: string;
    cost: number;
    type: FoodType;
    description: string;
}

let menuItems: MenuItem[] = [
    {
        key: 0,
        name: "Eggs",
        cost: 2.0,
        type: "Breakfast",
        description: "Scrambled Eggs with melted cheese inside.",
    },
    {
        key: 1,
        name: "Pancakes",
        cost: 3.0,
        type: "Breakfast",
        description: "testDesc",
    },
    {
        key: 2,
        name: "Bacon",
        cost: 2.5,
        type: "Breakfast",
        description: "testDesc",
    },
    {
        key: 3,
        name: "French Toast",
        cost: 3.5,
        type: "Breakfast",
        description: "testDesc",
    },
    {
        key: 4,
        name: "Garlic Breadsticks",
        cost: 2.5,
        type: "Lunch",
        description: "testDesc",
    },
    {
        key: 5,
        name: "Pizza",
        cost: 5.0,
        type: "Dinner",
        description: "testDesc",
    },
    {
        key: 6,
        name: "Hot Pockets",
        cost: 4.0,
        type: "Dinner",
        description: "testDesc",
    },
];

export { menuItems };
