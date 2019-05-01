import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

// v1
// const App =()=> {
//    const client = {
//       sandbox: 'AZFIOb6VCajNF5tNoS5cZtoaaYC4OKLsw2QE6W3yPBZ5W-h5nwNXE1hrVAbpFtk06oksWpBcIBligR6Q'
//     }
//   return (
//     <div className="App">
//       <PaypalExpressBtn client={client} currency={'USD'} total={1.00}/>
//     </div>
//   );
// }

// v2
const App = () => {
    const onSuccess = (payment) => {
      console.log("Payment Successful", payment);
    }
    const onCancel = (data) => {
      console.log("Payment cancelled", data);
    }
    const onError = (error) => {
      console.log("Error", error);
    }
    let env = 'sandbox';
    let currency = 'USD';
    let  total = 1;

  const client = {
    sandbox: 'AZFIOb6VCajNF5tNoS5cZtoaaYC4OKLsw2QE6W3yPBZ5W-h5nwNXE1hrVAbpFtk06oksWpBcIBligR6Q'
  }

  return (
    <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
  );
}

export default App;
