import classes from './CartItem.module.css';

const CartItem = (props) => {
    return (
        <li className={classes['cart-item']}>
            <div>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.summary}>
                    <span className={classes.price}>
                        <i className="fa fa-inr"></i>
                        {props.price}
                    </span>
                    <span className={classes.quantity}>x {props.quantity}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
