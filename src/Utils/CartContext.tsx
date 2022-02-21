import React, { useContext, useState } from "react";

// Create Cart Context with default values
export const CartContext = React.createContext({
    cart: [],
    addItem: (item: any) => {},
    removeItem: (item: any) => {},
});

// Custom hook to return the CartContext
export const useCart = () => {
    return useContext(CartContext);
};

// CartProvider Function
export const CartProvider = (props: any) => {
    // Get the cart from the sessionStorage
    const getSessionStorageCart = () => {
        return JSON.parse(sessionStorage.getItem("cart") || "[]");
    };

    // Set the sessionStorage cart variable
    const setSessionStorageCart = (newArray: any) => {
        sessionStorage.setItem("cart", JSON.stringify(newArray));
    };

    // Add item to cart
    const addToCart = (item: any) => {
        // Get the cart from session storage if it exists
        let cartArray = getSessionStorageCart();

        // Find the item in the cart if it exists
        const elementIndex = cartArray.findIndex(
            (element: any) => element.name === item.name
        );

        // Check if item already exists
        if (elementIndex !== -1) {
            // Update the current item's quantity
            cartArray[elementIndex] = {
                ...cartArray[elementIndex],
                quantity: cartArray[elementIndex].quantity + 1,
            };
        } else {
            // Set up new item
            let newItem = { ...item, id: cartArray.length + 1, quantity: 1 };

            // Add item to the cart array
            cartArray.push(newItem);
        }

        // Set the cart to the cartArray
        setCart({
            ...cartContext,
            cart: cartArray,
        });

        // Set the cart array in the session storage
        setSessionStorageCart(cartArray);
    };

    // ! Update the id to be a unique id. I'm having issues with removing items with the same id
    // Remove item from cart
    const removeFromCart = (item: any) => {
        // Get the cart from session storage if it exists
        let cartArray = getSessionStorageCart();

        // Find the index of the current item
        const elementIndex = cartArray.findIndex((element: any) => {
            return element.name === item.name;
        });

        // Decrement the quantity of the found item
        cartArray[elementIndex] = {
            ...cartArray[elementIndex],
            quantity: cartArray[elementIndex].quantity - 1,
        };

        // If the item's quantity is 0, remove that item
        if (cartArray[elementIndex].quantity === 0) {
            let newArray = cartArray.filter((element: any) => {
                return element.name !== item.name;
            });

            // Set the cart to the newArray
            setCart({
                ...cartContext,
                cart: newArray,
            });

            // Set the cart key to the cart state
            setSessionStorageCart(newArray);
        } else {
            // Set the cart to the cartArray
            setCart({
                ...cartContext,
                cart: cartArray,
            });

            // Set the cart key to the cart state
            setSessionStorageCart(cartArray);
        }
    };

    // Create cart state
    const [cartContext, setCart] = useState({
        cart: getSessionStorageCart(),
        addItem: (item: any) => addToCart(item),
        removeItem: (item: any) => removeFromCart(item),
    });

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};
