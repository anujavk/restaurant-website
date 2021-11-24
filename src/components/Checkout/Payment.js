import classes from './Payment.module.css';
import { useContext, useEffect } from 'react';
import CheckoutContext from '../../store/checkout-context';

const Payment = (props) => {
    const checkoutCtrx = useContext(CheckoutContext);

    useEffect(() => {
        props.onFormInput(checkoutCtrx.isPayValid);
    }, []);

    const nameHandler = (event) => {
        checkoutCtrx.addPayment({
            ...checkoutCtrx.data.payment,
            name: event.target.value,
        });
        checkoutCtrx.validatePayment();
        props.onFormInput(checkoutCtrx.isPayValid);
    };

    const numberHandler = (event) => {
        checkoutCtrx.addPayment({
            ...checkoutCtrx.data.payment,
            number: event.target.value,
        });
        checkoutCtrx.validatePayment();
        props.onFormInput(checkoutCtrx.isPayValid);
    };

    const expDateHandler = (event) => {
        checkoutCtrx.addPayment({
            ...checkoutCtrx.data.payment,
            expDate: event.target.value,
        });
        checkoutCtrx.validatePayment();
        props.onFormInput(checkoutCtrx.isPayValid);
    };

    const cvvHandler = (event) => {
        checkoutCtrx.addPayment({
            ...checkoutCtrx.data.payment,
            cvv: event.target.value,
        });
        checkoutCtrx.validatePayment();
        props.onFormInput(checkoutCtrx.isPayValid);
    };

    return (
        <div className={classes.container}>
            <div className={classes.topName}>Payment method</div>
            <div className={classes.card}>
                <div className={classes.cardName}>
                    <input type="text" id="cardName" value={checkoutCtrx.data.payment.name} onChange={nameHandler} required />
                    <label>Name on Card *</label>
                </div>
                <div className={classes.cardNumber}>
                    <input id="cardNumber" type="text" maxLength="16" value={checkoutCtrx.data.payment.number} onChange={numberHandler} required />
                    <label>Card Number *</label>
                </div>
            </div>
            <div className={classes.dateCvv}>
                <div className={classes.date}>
                    <input type="month" id="date" maxLength="4" size="4" value={checkoutCtrx.data.payment.expDate} onChange={expDateHandler} required />
                    <label>Expiry Date *</label>
                </div>
                <div className={classes.cvv}>
                    <input id="cvv" type="text" maxLength="3" value={checkoutCtrx.data.payment.cvv} onChange={cvvHandler} required />
                    <label>CVV *</label>
                </div>
            </div>
        </div>
    );
};

export default Payment;
