import { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = () => {
  const [selectedAmount, setSelectedAmount] = useState('1.00');
  const clientId = 'AexKzI93gYaroCQRWW2lJY6c5fq7NsyiE8I_U-_7P-tYik5Z4uLNX6Iy0bIv2CVoP6jcdIKx1J18R_m8';

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: selectedAmount, 
            currency_code: 'USD',
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      console.log('Transaction completed by ' + details.payer.name.given_name);
    });
  };

  const handleAmountChange = (event) => {
    setSelectedAmount(event.target.value);
  };

  return (
    <div>
      <label>Choose your plan</label><br></br>
      <input
        type="radio"
        name="amount"
        value="5.00"
        checked={selectedAmount === '5.00'}
        onChange={handleAmountChange}
      />
      $5

      <input
        type="radio"
        name="amount"
        value="20.00"
        checked={selectedAmount === '20.00'}
        onChange={handleAmountChange}
      />
      $20
    <PayPalScriptProvider options={{ 'client-id': clientId }}>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
    </div>
     
  );
};

export default PayPalButton;
