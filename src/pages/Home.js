import classes from './Home.module.css';
import { useContext } from 'react';
import burgerImage from '../assets/floating-burger.png';
import { FiPlusCircle } from 'react-icons/fi';
import CartContext from '../store/cart-context';

const Home = () => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = () => {
        cartCtx.addItem({
            id: 100,
            name: 'Crunchy Chicken Burger',
            quantity: 1,
            price: 310,
        });
    };

    return (
        <div className={classes.container} id="home">
            <div className={classes.itemLeft}>
                <div className={classes.itemLeftText}>
                    <div className={classes.itemLeftText1}>New In Menu ______</div>
                    <div className={classes.itemLeftText2}>Crunchy Chicken Burger</div>
                </div>
                <div className={classes.itemLeftAdd}>
                    <ul className={classes.itemLeftAddList}>
                        <li>Fried Chicken</li>
                        <li>Lettuce Tomato</li>
                        <li>House Relish</li>
                    </ul>
                    <div className={classes.itemLeftAddPrice}>
                        Only <i className="fa fa-inr"></i>310
                    </div>
                    <div className={classes.itemLeftAddBtn}>
                        <button onClick={addToCartHandler}>
                            <FiPlusCircle className={classes.hvr} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={classes.itemRight}>
                <img src={burgerImage} alt="Burger" />
            </div>
        </div>
    );
};

export default Home;
