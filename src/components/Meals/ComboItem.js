import classes from './ComboItem.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import { useState } from 'react';
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';

const ComboItem = (props) => {
    const [quantVal, setQuantVal] = useState(props.quantity);
    const cartCtx = useContext(CartContext);

    const addButtonHandler = () => {
        setQuantVal((prevValue, nextValue) => {
            return (nextValue = Math.min(prevValue + 1, 50));
        });
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            quantity: 1,
            price: props.price,
        });
    };

    const delButtonHandler = () => {
        setQuantVal((prevValue, nextValue) => {
            return (nextValue = Math.max(prevValue - 1, 0));
        });
        if (quantVal > 0) cartCtx.removeItem(props.id);
    };

    return (
        <section className={classes.container}>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.desc}>{props.description}</div>
            <div className={classes.price}>
                <i className="fa fa-inr"></i>
                {props.price}
            </div>
            <div className={classes.quantSection}>
                <button className={classes.btn} onClick={addButtonHandler}>
                    <IoAddCircle />
                </button>
                <input className={classes.quantity} type="number" id="quantity" value={quantVal} max="50" min="0" readOnly />
                <button className={classes.btn} onClick={delButtonHandler}>
                    <IoRemoveCircle />
                </button>
            </div>
        </section>
    );
};

export default ComboItem;
