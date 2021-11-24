import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import classes from './NavBar.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import { FiShoppingBag } from 'react-icons/fi';
import { BiFoodMenu } from 'react-icons/bi';
import Button from '../UI/Button';

import {} from 'react-router-dom';

const NavBar = (props) => {
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.quantity;
    }, 0);

    return (
        <Fragment>
            <div className={classes.navBar}>
                <NavLink to="/" className={classes.name}>
                    <span>Restro</span>
                </NavLink>
                <Link className={classes.navBarLink} to="/checkout" activeclassname={classes.active} onClick={props.onShowCart}>
                    <Button>
                        <FiShoppingBag className={classes.cartIcon} />
                        <span className={classes.hide}>Cart</span>
                        <span style={{ paddingLeft: '0.3vw' }}>:{numberOfCartItems}</span>
                    </Button>
                </Link>
                <Link to="menu" spy={true} smooth={true} duration={500} className={classes.navBarLink} activeclassname={classes.active}>
                    <Button>
                        <BiFoodMenu className={classes.menuIcon} />
                        <span className={classes.hide}>Order Now</span>
                    </Button>
                </Link>
            </div>
        </Fragment>
    );
};

export default NavBar;
