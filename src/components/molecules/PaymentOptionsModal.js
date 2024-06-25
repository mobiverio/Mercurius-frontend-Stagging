import React from "react";

const PaymentOptionsModal = ({ onClose }) => {
  // Function to handle payment with each provider
  const handlePayment = (provider) => {
    console.log(`Proceeding with ${provider} payment`);
    // Implement actual payment logic for each provider here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md w-full max-w-md mx-auto">
        <h2 className="font-semibold text-lg mb-4">Choose Payment Method</h2>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handlePayment("crypto")}
            className="p-2 border rounded-md bg-blue-500 text-white hover:bg-blue-600"
          >
            Pay with Crypto
          </button>
          <button
            onClick={() => handlePayment("paystack")}
            className="p-2 border rounded-md bg-green-500 text-white hover:bg-green-600"
          >
            Pay with Paystack
          </button>
          <button
            onClick={() => handlePayment("momo")}
            className="p-2 border rounded-md bg-yellow-500 text-white hover:bg-yellow-600"
          >
            Pay with Mobile Money
          </button>
          <button
            onClick={() => handlePayment("paypal")}
            className="p-2 border rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Pay with PayPal
          </button>
          <button
            onClick={onClose}
            className="p-2 border rounded-md bg-gray-200 text-black hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptionsModal;
