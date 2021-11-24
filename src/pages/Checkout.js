import classes from './Checkout.module.css';
import { useState, Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CartContext from '../store/cart-context';
import CheckoutContext from '../store/checkout-context';
import AddressForm from '../components/Checkout/AddressForm';
import Payment from '../components/Checkout/Payment';
import ReviewOrder from '../components/Checkout/ReviewOrder';
import ConfirmGif from '../assets/order-placed1.gif';

let circleCls1 = `${classes.solid}`;
let circleCls2 = `${classes.solid}`;
let circleCls3 = `${classes.solid}`;

function getStepContent(step, formInputHandler) {
    switch (step) {
        case 0:
            circleCls1 = `${classes.circle}`;
            circleCls2 = `${classes.solid}`;
            circleCls3 = `${classes.solid}`;
            return <AddressForm onFormInput={formInputHandler} />;
        case 1:
            circleCls1 = `${classes.solid}`;
            circleCls2 = `${classes.circle}`;
            circleCls3 = `${classes.solid}`;
            return <Payment onFormInput={formInputHandler} />;
        case 2:
            circleCls1 = `${classes.solid}`;
            circleCls2 = `${classes.solid}`;
            circleCls3 = `${classes.circle}`;
            return <ReviewOrder onFormInput={formInputHandler} />;
        default:
            throw new Error('Unknown step');
    }
}

const Checkout = () => {
    const cartCtx = useContext(CartContext);
    const checkoutCtrx = useContext(CheckoutContext);
    const [activeStep, setActiveStep] = useState(0);
    const [orderConfirmPage, setOrderConfirmPage] = useState(false);
    const [isValid, setIsValid] = useState(false);
    let history = useHistory();

    const sendDataToDatabase = () => {
        fetch('https://restro-app0-default-rtdb.europe-west1.firebasedatabase.app/ordered.json', {
            method: 'POST',
            body: JSON.stringify({
                itemList: cartCtx.items,
                total: cartCtx.totalPrice,
                userData: checkoutCtrx.data,
            }),
        });
    };

    const nextBtnHandler = () => {
        if (activeStep === 0) {
            checkoutCtrx.validateAddress();
            setIsValid(checkoutCtrx.isAddValid);
        }
        if (activeStep === 1) {
            checkoutCtrx.validatePayment();
            setIsValid(checkoutCtrx.isPayValid);
        }
        if (isValid) {
            setActiveStep(Math.min(activeStep + 1, 2));
        }
    };

    const backBtnHandler = () => {
        setActiveStep(Math.max(activeStep - 1, 0));
    };

    const submitBtnHandler = () => {
        setOrderConfirmPage(true);
        sendDataToDatabase();
        setTimeout(() => {
            setOrderConfirmPage(false);
            history.push('/');
            cartCtx.clearCart();
            checkoutCtrx.clearCheckout();
        }, 3200);
    };

    const formInputHandler = (val) => {
        setIsValid(val);
        console.log('isValid: ' + isValid);
    };

    const content = (
        <section className={classes.container}>
            <header>
                <div className={classes.headerTitle}>CHECKOUT</div>
                <div className={classes.headerSubTitle}>
                    <div className={classes.headerSubTitle1}>
                        <div className={circleCls1} />
                        <div className={classes.hText}>Shipping address</div>
                    </div>
                    <div className={classes.headerSubTitle1}>
                        <div className={circleCls2} />
                        <div className={classes.hText}>Payment details</div>
                    </div>
                    <div className={classes.headerSubTitle1}>
                        <div className={circleCls3} />
                        <div className={classes.hText}>Review your order</div>
                    </div>
                </div>
            </header>
            <main>{getStepContent(activeStep, formInputHandler)}</main>
            <footer>
                {activeStep > 0 && <button onClick={backBtnHandler}>Back</button>}
                {activeStep < 2 && (
                    <button onClick={nextBtnHandler} disabled={!isValid}>
                        Next
                    </button>
                )}
                {activeStep > 1 && (
                    <button onClick={submitBtnHandler} disabled={!isValid}>
                        Order
                    </button>
                )}
            </footer>
        </section>
    );

    const redirect = (
        <section className={classes.container} style={{ fontSize: '20px', color: '#4F4F4F' }}>
            <img src={ConfirmGif} alt="Confirm Gif" />
            Your order has been confirmed!
        </section>
    );

    return (
        <Fragment>
            {orderConfirmPage && redirect}
            {!orderConfirmPage && content}
        </Fragment>
    );
};

export default Checkout;
