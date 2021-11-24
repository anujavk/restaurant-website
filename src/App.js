import { useState, Fragment, useEffect, useContext } from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/Header/NavBar';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import CheckoutProvider from './store/CheckoutProvider';
import Loader from './pages/Loader';
import Home from './pages/Home';
import ComboSection from './pages/ComboSection';
import Menu from './pages/Menu';
import ContactUs from './pages/ContactUs';
import Checkout from './pages/Checkout';
import CartContext from './store/cart-context';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const [showLoader, setShowLoader] = useState(true);
    const cartCtx = useContext(CartContext);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const content = (
        <BrowserRouter>
            <CheckoutProvider>
                <CartProvider>
                    <div>
                        {cartIsShown && <Cart onClose={hideCartHandler} />}
                        <NavBar onShowCart={showCartHandler} />
                        <div>
                            <Route path="/" exact>
                                <Home />
                                <ComboSection />
                                <Menu />
                                <ContactUs />
                            </Route>
                            <Route path="/checkout">{cartCtx.items.length > 0 ? <Checkout /> : <Redirect to="/" />}</Route>
                        </div>
                    </div>
                </CartProvider>
            </CheckoutProvider>
        </BrowserRouter>
    );

    return (
        <Fragment>
            {showLoader && <Loader />}
            {!showLoader && content}
        </Fragment>
    );
}

export default App;
