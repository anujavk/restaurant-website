import classes from './MenuItems.module.css';
import { useContext, useState, useEffect } from 'react';
import CartContext from '../store/cart-context';
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';

const Content = (props) => {
    const [quantVal, setQuantVal] = useState(props.data.quantity);
    const cartCtx = useContext(CartContext);

    const addButtonHandler = () => {
        setQuantVal((prevValue, nextValue) => {
            return (nextValue = Math.min(prevValue + 1, 50));
        });
        cartCtx.addItem({
            id: props.data.id,
            name: props.data.name,
            quantity: 1,
            price: props.data.price,
        });
    };

    const delButtonHandler = () => {
        setQuantVal((prevValue, nextValue) => {
            return (nextValue = Math.max(prevValue - 1, 0));
        });
        if (quantVal > 1) cartCtx.removeItem(props.data.id);
    };

    const addBtnHandler = () => {
        setQuantVal(1);
    };

    return (
        <div id={props.data.id} className={classes.item} key={props.data.id}>
            <div className={classes.top}>
                <div className={classes.name}>{props.data.name}</div>
                <div className={classes.line} />
                <div className={classes.price}>
                    <i className="fa fa-inr"></i>
                    {props.data.price}
                </div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.desc}>{props.data.description}</div>
                <div className={classes.addSec}>
                    {quantVal === 0 && (
                        <button className={classes.addBtn} onClick={addBtnHandler}>
                            ADD
                        </button>
                    )}
                    {quantVal > 0 && (
                        <section className={classes.addQuant}>
                            <button className={classes.btn} onClick={addButtonHandler}>
                                <IoAddCircle />
                            </button>
                            <input className={classes.quantity} type="number" id="quantity" value={quantVal} max="50" min="0" readOnly />
                            <button className={classes.btn} onClick={delButtonHandler}>
                                <IoRemoveCircle />
                            </button>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};

export const BurgerItems = () => {
    const [burgerMenu, setBurgerMenu] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch('https://restro-app0-default-rtdb.europe-west1.firebasedatabase.app/menu/burger.json');
            const responseData = await response.json();

            const items = [];
            for (const key in responseData) {
                items.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                    quantity: 0,
                });
            }

            setBurgerMenu(items);
        };
        fetchMenu();
    }, []);

    return (
        <section className={classes.container}>
            {burgerMenu.map((data) => {
                return <Content data={data} key={data.id}/>;
            })}
        </section>
    );
};

export const PizzaItems = () => {
    const [pizzaMenu, setPizzaMenu] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch('https://restro-app0-default-rtdb.europe-west1.firebasedatabase.app/menu/pizza.json');
            const responseData = await response.json();

            const items = [];
            for (const key in responseData) {
                items.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                    quantity: 0,
                });
            }

            setPizzaMenu(items);
        };
        fetchMenu();
    }, []);

    return (
        <section className={classes.container}>
            {pizzaMenu.map((data) => {
                return <Content data={data} key={data.id}/>;
            })}
        </section>
    );
};

export const BeverageItems = () => {
    const [mocktailMenu, setMocktailMenu] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch('https://restro-app0-default-rtdb.europe-west1.firebasedatabase.app/menu/mocktail.json');
            const responseData = await response.json();

            const items = [];
            for (const key in responseData) {
                items.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                    quantity: 0,
                });
            }

            setMocktailMenu(items);
        };
        fetchMenu();
    }, []);

    return (
        <section className={classes.container}>
            {mocktailMenu.map((data) => {
                return <Content data={data} key={data.id}/>;
            })}
        </section>
    );
};

export const CoffeeItems = () => {
    const [coffeeMenu, setCoffeeMenu] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch('https://restro-app0-default-rtdb.europe-west1.firebasedatabase.app/menu/coffee.json');
            const responseData = await response.json();

            const items = [];
            for (const key in responseData) {
                items.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                    quantity: 0,
                });
            }

            setCoffeeMenu(items);
        };
        fetchMenu();
    }, []);

    return (
        <section className={classes.container}>
            {coffeeMenu.map((data) => {
                return <Content data={data} key={data.id}/>;
            })}
        </section>
    );
};
