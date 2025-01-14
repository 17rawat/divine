import React from "react";

import PaymentResult from "@/components/PaymentResult";

const SuccessPage = async ({ searchParams }) => {
  const { paymentId, amount, success } = await searchParams;

  return (
    <div>
      <PaymentResult paymentId={paymentId} amount={amount} success={success} />
    </div>
  );
};

export default SuccessPage;
