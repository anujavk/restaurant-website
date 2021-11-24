import { useReducer } from 'react';

import CheckoutContext from './checkout-context';

const defaultCheckoutState = {
    data: { address: { firstName: '', lastName: '', address1: '', address2: '', city: '', state: '', country: '', zip: '' }, payment: { name: '', number: '', expDate: '', cvv: '' } },
    isAddValid: false,
    isPayValid: false,
};

const checkoutReducer = (state, action) => {
    if (action.type === 'ADD_ADD') {
        const updatedData = { ...action.data };
        state.data.address = updatedData;
        console.log('State data:' + JSON.stringify(state.data));
        return { data: { address: { ...updatedData }, payment: { ...state.data.payment } }, isAddValid: state.isAddValid, isPayValid: state.isPayValid };
    }

    if (action.type === 'ADD_PAY') {
        const updatedData = { ...action.data };
        state.data.payment = updatedData;
        console.log('State data:' + JSON.stringify(state.data));
        return { data: { payment: { ...updatedData }, address: { ...state.data.address } }, isAddValid: state.isAddValid, isPayValid: state.isPayValid };
    }

    if (action.type === 'IS_ADD') {
        if (
            state.data.address.firstName.length > 0 &&
            state.data.address.lastName.length > 0 &&
            state.data.address.address1.length > 0 &&
            state.data.address.city.length > 0 &&
            state.data.address.state.length > 0 &&
            state.data.address.country.length > 0 &&
            state.data.address.zip.length === 6
        ) {
            state.isAddValid = true;
            return { ...state, isAddValid: true };
        }
        return { ...state, isAddValid: false };
    }

    if (action.type === 'IS_PAY') {
        if (state.data.payment.name.length > 0 && state.data.payment.number.length > 0 && state.data.payment.expDate.length > 0 && state.data.payment.cvv.length > 0) {
            state.isPayValid = true;
            console.log('isPayValid:' + state.isPayValid);
            return { ...state, isPayValid: true };
        }
        console.log('isPayValid:' + state.isPayValid);
        return { ...state, isPayValid: false };
    }

    if (action.type === 'CLEAR') {
        return defaultCheckoutState;
    }

    return defaultCheckoutState;
};

const CheckoutProvider = (props) => {
    const [checkoutState, dispatchCheckoutAction] = useReducer(checkoutReducer, defaultCheckoutState);

    const addAddressHandler = (data) => {
        dispatchCheckoutAction({ type: 'ADD_ADD', data: data });
    };

    const addPaymentHandler = (data) => {
        dispatchCheckoutAction({ type: 'ADD_PAY', data: data });
    };

    const validateAddressHandler = () => {
        dispatchCheckoutAction({ type: 'IS_ADD' });
    };

    const validatePaymentHandler = () => {
        dispatchCheckoutAction({ type: 'IS_PAY' });
    };

    const clearCheckoutHandler = () => {
        dispatchCheckoutAction({ type: 'CLEAR' });
    };

    const checkoutContext = {
        data: checkoutState.data,
        isAddValid: checkoutState.isAddValid,
        isPayValid: checkoutState.isPayValid,
        addAddress: addAddressHandler,
        addPayment: addPaymentHandler,
        validateAddress: validateAddressHandler,
        validatePayment: validatePaymentHandler,
        clearCheckout: clearCheckoutHandler,
    };

    return <CheckoutContext.Provider value={checkoutContext}>{props.children}</CheckoutContext.Provider>;
};

export default CheckoutProvider;
