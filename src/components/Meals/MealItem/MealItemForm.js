import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const [quantityIsValid, setquantityIsValid] = useState(true);
    const quantityInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredquantity = quantityInputRef.current.value;
        const enteredquantityNumber = +enteredquantity;

        if (enteredquantity.trim().length === 0 || enteredquantityNumber < 1 || enteredquantityNumber > 5) {
            setquantityIsValid(false);
            return;
        }

        props.onAddToCart(enteredquantityNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={quantityInputRef}
                label="quantity"
                input={{
                    id: 'quantity_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
            {!quantityIsValid && <p>Please enter a valid quantity (1-5).</p>}
        </form>
    );
};

export default MealItemForm;
