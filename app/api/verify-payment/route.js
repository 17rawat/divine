import { NextResponse } from "next/server";
import crypto from "crypto";

const generatedSignature = (razorpayOrderId, razorpayPaymentId) => {
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  const sign = crypto
    .createHmac("sha256", keySecret)
    .update(razorpayOrderId + "|" + razorpayPaymentId)
    .digest("hex");

  return sign;
};

export async function POST(request) {
  try {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature } =
      await request.json();

    // console.log(razorpayPaymentId, razorpaySignature);

    const signature = generatedSignature(razorpayOrderId, razorpayPaymentId);

    if (signature !== razorpaySignature) {
      return NextResponse.json(
        { message: "payment verification failed", success: false },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "payment verified successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during payment verification:", error);
    return NextResponse.json(
      { message: "Internal server error", success: false },
      { status: 500 }
    );
  }
}
