import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalPrice: 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedtotalPrice = state.totalPrice + action.item.price * action.item.quantity;

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + action.item.quantity,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalPrice: updatedtotalPrice,
        };
    }
    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingItem = state.items[existingCartItemIndex];
        const updatedtotalPrice = state.totalPrice - existingItem.price;
        let updatedItems;
        if (existingItem.quantity === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalPrice: updatedtotalPrice,
        };
    }

    if (action.type === 'CLEAR') {
        return defaultCartState;
    }

    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const clearCartHandler = () => {
        dispatchCartAction({ type: 'CLEAR' });
    };

    const cartContext = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler,
    };

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
