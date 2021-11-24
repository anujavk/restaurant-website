import classes from './AddressForm.module.css';
import { useContext, useEffect } from 'react';
import CheckoutContext from '../../store/checkout-context';

const AddressForm = (props) => {
    const checkoutCtrx = useContext(CheckoutContext);

    useEffect(() => {
        props.onFormInput(checkoutCtrx.isAddValid);
    }, []);

    const firstNameHandler = (event) => {
        checkoutCtrx.addAddress({
            ...checkoutCtrx.data.address,
            firstName: event.target.value,
        });
        checkoutCtrx.validateAddress();
        props.onFormInput(checkoutCtrx.isAddValid);
    };

    const lastNameHandler = (event) => {
        checkoutCtrx.addAddress({
            ...checkoutCtrx.data.address,
            lastName: event.target.value,
        });
        checkoutCtrx.validateAddress();
        props.onFormInput(checkoutCtrx.isAddValid);
    };

    const address1Handler = (event) => {
        checkoutCtrx.addAddress({
            ...checkoutCtrx.data.address,
            address1: event.target.value,
        });
        checkoutCtrx.validateAddress();
        props.onFormInput(checkoutCtrx.isAddValid);
    };

    const address2Handler = (event) => {
        checkoutCtrx.addAddress({
            ...checkoutCtrx.data.address,
            address2: event.target.value,
        });
        checkoutCtrx.validateAddress();
        props.onFormInput(checkoutCtrx.isAddValid);
    };

    const cityHandler = (event) => {
        checkoutCtrx.addAddress({
            ...checkoutCtrx.data.address,
            city: event.target.value,
        });
        checkoutCtrx.validateAddress();
        props.onFormInput(checkoutCtrx.isAddValid);
    };

    const stateHandler = (event) => {
        checkoutCtrx.addAddress({
            ...checkoutCtrx.data.address,
            state: event.target.value,
        });
        checkoutCtrx.validateAddress();
        props.onFormInput(checkoutCtrx.isAddValid);
    };

    const countryHandler = (event) => {
        checkoutCtrx.addAddress({
            ...checkoutCtrx.data.address,
            country: event.target.value,
        });
        checkoutCtrx.validateAddress();
        props.onFormInput(checkoutCtrx.isAddValid);
    };

    const zipHandler = (event) => {
        checkoutCtrx.addAddress({
            ...checkoutCtrx.data.address,
            zip: event.target.value,
        });
        checkoutCtrx.validateAddress();
        props.onFormInput(checkoutCtrx.isAddValid);
    };

    return (
        <div className={classes.container}>
            <div className={classes.topName}>Shipping address</div>
            <div className={classes.name}>
                <div className={classes.firstName}>
                    <input type="text" id="firstName" maxLength="25" value={checkoutCtrx.data.address.firstName} onChange={firstNameHandler} required />
                    <label>First Name *</label>
                </div>
                <div className={classes.lastName}>
                    <input type="text" id="lastName" maxLength="25" value={checkoutCtrx.data.address.lastName} onChange={lastNameHandler} required />
                    <label>Last Name *</label>
                </div>
            </div>
            <div className={classes.address1}>
                <input type="text" id="address1" maxLength="40" value={checkoutCtrx.data.address.address1} onChange={address1Handler} required />
                <label>Address Line 1 *</label>
            </div>
            <div className={classes.address2}>
                <input type="text" id="Address2" maxLength="40" value={checkoutCtrx.data.address.address2} onChange={address2Handler} required />
                <label>Address Line 2 </label>
            </div>
            <div className={classes.cityState}>
                <div className={classes.city}>
                    <input type="text" id="city" maxLength="25" value={checkoutCtrx.data.address.city} onChange={cityHandler} required />
                    <label>City *</label>
                </div>
                <div className={classes.state}>
                    <input type="text" id="state" maxLength="25" value={checkoutCtrx.data.address.state} onChange={stateHandler} required />
                    <label>State/Province/Region *</label>
                </div>
            </div>
            <div className={classes.zipCountry}>
                <div className={classes.zip}>
                    <input type="text" id="zip" maxLength="6" value={checkoutCtrx.data.address.zip} onChange={zipHandler} required />
                    <label>Zip/Postal Code *</label>
                </div>
                <div className={classes.country}>
                    <input type="text" id="country" maxLength="25" value={checkoutCtrx.data.address.country} onChange={countryHandler} required />
                    <label>Country *</label>
                </div>
            </div>
        </div>
    );
};

export default AddressForm;
