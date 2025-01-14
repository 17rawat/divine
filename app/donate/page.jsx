"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

const suggestedAmounts = [101, 501, 1001];

export default function DonatePage() {
  const [amount, setAmount] = useState("");

  const router = useRouter();

  const handlePayment = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount * 100 }),
      });

      const data = await response.json();

      const options = {
        key: process.env.RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "Gita Foundation",
        description: "Donation",
        order_id: data.id,
        handler: async function (response) {
          try {
            const res = await fetch("/api/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
              }),
            });

            const data = await res.json();

            if (data) {
              router.push(
                `/donate/result?paymentId=${response.razorpay_payment_id}&amount=${amount}&success=${data.success}`
              );
            }
          } catch (error) {
            console.log(error);
          }
        },
        prefill: {
          contact: "9999999999",
        },
        theme: {
          color: "#000000",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-orange-50">
      <Script
        type="text/javascript"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-orange-900">
            Support the Sacred Knowledge
          </h1>
          <p className="text-orange-800 text-base sm:text-lg max-w-2xl mx-auto">
            Your contribution helps spread the timeless wisdom of Bhagavad Gita
            to seekers worldwide.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-orange-100">
          <form onSubmit={handlePayment} className="space-y-4">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {suggestedAmounts.map((amt, index) => (
                <span
                  key={index}
                  className="cursor-pointer px-4 py-2 bg-orange-200 text-orange-800 font-medium rounded-full hover:bg-orange-300 transition-colors text-sm sm:text-base"
                  onClick={() => setAmount(amt)}
                >
                  ₹{amt}
                </span>
              ))}
            </div>
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-orange-700 mb-2"
              >
                Donation Amount (₹)
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                placeholder="Enter amount"
                required
                onChange={(event) => setAmount(Number(event.target.value))}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors text-sm sm:text-base disabled:opacity-50"
            >
              Donate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
