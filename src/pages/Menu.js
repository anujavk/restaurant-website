import classes from './Menu.module.css';
import { useState } from 'react';
import { BurgerItems, PizzaItems, BeverageItems, CoffeeItems } from './MenuItems';
import BurgerIcon from '../assets/burger.png';
import PizzaIcon from '../assets/pizza.png';
import DrinksIcon from '../assets/drink.png';
import CoffeeIcon from '../assets/coffeecup.png';

const Menu = () => {
    const [menuSec, setMenuSec] = useState({ burger: true, pizza: false, drinks: false, coffee: false });

    const burgerClickHandler = () => {
        setMenuSec(() => {
            return { burger: true, pizza: false, drinks: false, coffee: false };
        });
    };

    const pizzaClickHandler = () => {
        setMenuSec(() => {
            return { burger: false, pizza: true, drinks: false, coffee: false };
        });
    };

    const drinksClickHandler = () => {
        setMenuSec(() => {
            return { burger: false, pizza: false, drinks: true, coffee: false };
        });
    };

    const coffeeClickHandler = () => {
        setMenuSec(() => {
            return { burger: false, pizza: false, drinks: false, coffee: true };
        });
    };

    return (
        <section className={classes.menu} id="menu">
            <div className={classes.title}>____ Menu ____</div>
            <div className={classes.iconsBtn}>
                <div onClick={burgerClickHandler} className={classes.icon}>
                    <img src={BurgerIcon} alt="burger" />
                    {menuSec.burger && <div className={classes.underline} />}
                </div>
                <div onClick={pizzaClickHandler} className={classes.icon}>
                    <img src={PizzaIcon} alt="pizza" />
                    {menuSec.pizza && <div className={classes.underline} />}
                </div>
                <div onClick={drinksClickHandler} className={classes.icon}>
                    <img src={DrinksIcon} alt="drinks" />
                    {menuSec.drinks && <div className={classes.underline} />}
                </div>
                <div onClick={coffeeClickHandler} className={classes.icon}>
                    <img src={CoffeeIcon} alt="coffee" />
                    {menuSec.coffee && <div className={classes.underline} />}
                </div>
            </div>
            {
                <div className={classes.menuContent}>
                    {menuSec.burger && <BurgerItems />}
                    {menuSec.pizza && <PizzaItems />}
                    {menuSec.drinks && <BeverageItems />}
                    {menuSec.coffee && <CoffeeItems />}
                </div>
            }
        </section>
    );
};

export default Menu;
