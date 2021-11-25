import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
    };

    const orderHandler = () => {
        props.onClose();
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />
            ))}
        </ul>
    );

    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>
                Close
            </button>
            {hasItems && (
                <NavLink to="/checkout">
                    <button className={classes.button} onClick={orderHandler}>
                        Order
                    </button>
                </NavLink>
            )}
        </div>
    );

    const cartModalContent = (
        <React.Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total Price</span>
                <span>
                    <i className="fa fa-inr"></i>
                    {cartCtx.totalPrice}
                </span>
            </div>
            {modalActions}
        </React.Fragment>
    );

    return <Modal onClose={props.onClose}>{cartModalContent}</Modal>;
};

export default Cart;
