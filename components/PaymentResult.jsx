import Link from "next/link";

export default function PaymentResult({ paymentId, amount, success }) {
  return (
    <div className="bg-orange-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-center">
              {success ? (
                <div className="bg-green-100 rounded-full p-3">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              ) : (
                <div className="bg-red-100 rounded-full p-3">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
              )}
            </div>
            <h1 className="mt-4 text-3xl font-bold text-center text-orange-900">
              {success ? "Payment Successful" : "Payment Failed"}
            </h1>
            <p className="mt-2 text-center text-orange-700">
              {success
                ? "Thank you for your generous donation"
                : "We're sorry, but there was an issue processing your donation"}
            </p>

            <div className="mt-8 border-t border-orange-100 pt-8">
              <h2 className="text-xl font-semibold text-orange-900 mb-4">
                Payment Details
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-orange-700">Payment ID:</span>
                  <span className="font-medium text-orange-900">
                    {paymentId}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700">Amount:</span>
                  <span className="font-medium text-orange-900">{amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700">Date:</span>
                  <span className="font-medium text-orange-900">
                    {new Date().toLocaleDateString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700">Status:</span>
                  <span
                    className={`font-medium ${
                      success ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {success ? "Successful" : "Failed"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {success ? (
                <Link
                  href="/"
                  className="block w-full text-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-md shadow-md hover:bg-orange-700 transition-colors duration-300"
                >
                  Return to Homepage
                </Link>
              ) : (
                <>
                  <Link
                    href="/donate"
                    className="block w-full text-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-md shadow-md hover:bg-orange-700 transition-colors duration-300"
                  >
                    Try Again
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 border border-orange-300 text-orange-700 font-semibold rounded-md shadow-md hover:bg-orange-100 transition-colors duration-300"
                  >
                    Contact Support
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
