import React from 'react';

const CheckoutContext = React.createContext({
    data: { address: { firstName: '', lastName: '', address1: '', address2: '', city: '', state: '', country: '', zip: '' }, payment: { name: '', number: '', expDate: '', cvv: '' } },
    isAddValid: false,
    isPayValid: false,
    addAddress: (inputData) => {},
    addPayment: (inputData) => {},
    validateAddress: () => {},
    validatePayment: () => {},
    clearCheckout: () => {},
});

export default CheckoutContext;
