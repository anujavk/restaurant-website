import classes from './ReviewOrder.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CheckoutContext from '../../store/checkout-context';

const ReviewOrder = () => {
    const cartCtx = useContext(CartContext);
    const checkoutCtrx = useContext(CheckoutContext);

    return (
        <section className={classes.container}>
            <div className={classes.pdetails}>
                <div className={classes.title}>Order summary</div>
                <div className={classes.productList}>
                    {cartCtx.items.map((item) => {
                        return (
                            <span id={item.id} className={classes.product}>
                                <div className={classes.productName}>{item.name}</div>
                                <div className={classes.productPrice}>
                                    <i className="fa fa-inr"></i>
                                    {item.price}
                                </div>
                            </span>
                        );
                    })}
                </div>
                <span className={classes.totalBill}>
                    <div className={classes.label}>Total</div>
                    <div className={classes.total}>${cartCtx.totalPrice}</div>
                </span>
            </div>
            <div className={classes.udetails}>
                <div className={classes.udetails1}>
                    <div className={classes.title}>Shipping</div>
                    <div className={classes.name}>
                        {checkoutCtrx.data.address.firstName} {checkoutCtrx.data.address.lastName}
                    </div>
                    <div className={classes.address}>
                        {checkoutCtrx.data.address.address1}, {checkoutCtrx.data.address.address2}
                    </div>
                </div>
                <div className={classes.udetails2}>
                    <div className={classes.title}>Payment details</div>
                    <div className={classes.udetails22}>
                        <div className={classes.label}>Card holder</div>
                        <div className={classes.cardDetails}>{checkoutCtrx.data.payment.name}</div>
                    </div>
                    <div className={classes.udetails22}>
                        <div className={classes.label}>Card number</div>
                        <div className={classes.cardDetails}>xxxx-xxxx-xxxx-{checkoutCtrx.data.payment.number.slice(-4)}</div>
                    </div>
                    <div className={classes.udetails22}>
                        <div className={classes.label}>Expiry date</div>
                        <div className={classes.cardDetails}>{checkoutCtrx.data.payment.expDate}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewOrder;
