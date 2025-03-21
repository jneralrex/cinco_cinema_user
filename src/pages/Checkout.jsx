import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineSecurity } from "react-icons/md";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Add default values if location.state is undefined
  const {
    selectedSeats = [],
    movieDetails = {
      title: "",
      language: "",
      format: "",
      theater: "",
      date: "",
      time: "",
      ticketId: "",
    },
    basePrice = 0,
    convenienceFee = 0,
    totalPayable = 0,
  } = location.state || {};

  // Redirect if no state is present
  if (!location.state) {
    navigate("/booking-summary");
    return null;
  }

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <div className="lg:max-w-7xl mt-14 md:mt-20 lg:mt-0 mx-auto p-5">
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        {/* Left Section - Contact Details & Payment */}
        <div className=" flex flex-col flex-1 space-y-4 ">
          {/* Contact Details Section */}
          <div className="bg-white rounded-lg shadow">
            <div className="bg-purple-800 text-white p-4 flex items-center gap-2">
              <span>Share your Contact Details</span>
            </div>
            <div className="p-4 space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="w-full p-3 border rounded focus:outline-none focus:border-purple-800"
              />
              <div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value="+234"
                    disabled
                    className="w-16 p-3 border rounded bg-gray-50"
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your mobile number"
                    className="flex-1 p-3 border rounded focus:outline-none focus:border-purple-800"
                  />
                </div>
                <p className="text-xs text-red-500 mt-1">
                  Please enter a valid mobile number.
                </p>
              </div>
              <button className="bg-purple-800 text-white px-6 py-2 rounded">
                Continue
              </button>
            </div>
          </div>

          {/* Promocode Section */}
          <div className="bg-white rounded-lg shadow">
            <div className="bg-gray-100 p-4 flex items-center gap-2">
              <span>Unlock offers or Apply Promocodes</span>
            </div>
          </div>

          {/* Payment Options Section */}
          <div className="bg-white rounded-lg shadow">
            <div className="bg-purple-800 text-white p-4">
              <span>Payment options</span>
            </div>
            <div className="lg:flex">
              {/* Payment Methods */}
              <div className="lg:w-1/3 border-r hidden lg:block">
                <div className="py-2">
                  <div className="p-3 hover:bg-gray-50 cursor-pointer">
                    QuikPay
                  </div>
                  <div className="p-3 hover:bg-gray-50 cursor-pointer">
                    Pay by any UPI App
                  </div>
                  <div className="p-3 hover:bg-gray-50 cursor-pointer bg-gray-100">
                    Debit/Credit Card
                  </div>
                  <div className="p-3 hover:bg-gray-50 cursor-pointer">
                    Net Banking
                  </div>
                  <div className="p-3 hover:bg-gray-50 cursor-pointer">
                    Mobile Wallets
                  </div>
                  <div className="p-3 hover:bg-gray-50 cursor-pointer">
                    Gift Voucher
                  </div>
                  <div className="p-3 hover:bg-gray-50 cursor-pointer">
                    Redeem Points
                  </div>
                </div>
              </div>
              {/* payment method for mobile */}
              <select className="select select-bordered outline-none ring-0 rounded-none w-full lg:hidden">
                <option disabled>Pick a Preferred Payment Method</option>
                <option>Pay by any UPI App</option>
                <option selected>Debit/Credit Card</option>
                <option>Net Banking</option>
                <option>Mobile Wallets</option>
                <option>Gift Voucher</option>
                <option>Redeem Points</option>
              </select>

              {/* Card Details Form */}
              <div className="flex-1 lg:p-6 p-4">
                <h3 className="mb-4">Enter your Card details</h3>
                <div className="bg-gray-100 lg:p-6 p-4 rounded space-y-4">
                  <div>
                    <label className="text-sm text-gray-600">Card Number</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="Enter Your Card Number"
                      className="w-full p-2 border rounded mt-1 focus:outline-none focus:border-purple-800"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">
                      Name on the card
                    </label>
                    <input
                      type="text"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full p-2 border rounded mt-1 focus:outline-none focus:border-purple-800"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="text-sm text-gray-600">Expiry</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="MM"
                          value={expiryMonth}
                          onChange={(e) => setExpiryMonth(e.target.value)}
                          className="w-16 p-2 border rounded mt-1 focus:outline-none focus:border-purple-800"
                        />
                        <input
                          type="text"
                          placeholder="YY"
                          value={expiryYear}
                          onChange={(e) => setExpiryYear(e.target.value)}
                          className="w-16 p-2 border rounded mt-1 focus:outline-none focus:border-purple-800"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 block">CVV</label>
                      <input
                        type="password"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="CVV"
                        className="w-20 p-2 border rounded mt-1 focus:outline-none focus:border-purple-800"
                      />
                    </div>
                  </div>
                </div>
                <button className="w-full bg-purple-800 text-white py-3 rounded mt-4">
                  MAKE PAYMENT
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  By clicking "Make Payment" you agree to the terms and
                  conditions
                </p>
              </div>
            </div>

            {/* Notes Section */}
            <div className="text-xs text-gray-500 space-y-2 px-4 pb-3">
              <p>Note:</p>
              <ol className="list-decimal pl-4 space-y-1">
                <li>
                  You can cancel the tickets 20 min(s) before the show. Refunds
                  will be done according to{" "}
                  <span className="text-pink-500">Cancellation Policy</span>
                </li>
                <li>
                  In case of Credit/Debit Card bookings, the Credit/Debit Card
                  and Card holder must be present at the ticket counter while
                  collecting the ticket(s).
                </li>
              </ol>
            </div>

            {/* Footer */}
            <div className="lg:flex items-center justify-between pt-4 border-t pb-5 px-4">
              <div className="text-xs text-gray-500">
                © Bigtree Entertainment Pvt. Ltd. |
                <span className="text-gray-600 hover:underline cursor-pointer">
                  {" "}
                  Privacy Policy
                </span>{" "}
                |
                <span className="text-gray-600 hover:underline cursor-pointer">
                  {" "}
                  Contact Us
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-500">
                  As safe as it gets
                </span>
                <MdOutlineSecurity className="text-xl" />
              </div>
            </div>
          </div>

          {/* Right Section - Order Summary */}
          
        </div>

        {/* Right Section - Order Summary */}
        <div className="mb-5">
          <div className="bg-white border rounded-lg shadow-md p-4">
            <div className="flex justify-between items-start mb-4">
              <h2 className="uppercase text-xs font-bold">ORDER SUMMARY</h2>
              <div className="text-right">
                <span className="lg:text-2xl text-xl font-semibold">{selectedSeats.length}</span>
                <p className="text-[10px] text-gray-600">Tickets</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sm">{movieDetails.title}</h3>
                <p className="text-xs text-gray-500">{movieDetails.language}, {movieDetails.format}</p>
                <p className="text-xs text-gray-500">{movieDetails.theater}</p>
                <p className="text-xs">M-Ticket</p>
                <p className="text-xs mt-2">{movieDetails.ticketId}</p>
                <div className="text-xs">
                  <p>{movieDetails.date}</p>
                  <p>{movieDetails.time}</p>
                </div>
              </div>

            <div className="pt-3 border-t border-dashed">
              <div className="flex justify-between text-sm">
                <span>Sub&nbsp;Total</span>
                <span>${Number(basePrice).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex flex-wrap items-center gap-1">
                  <span className="text-sm">+&nbsp;Convenience&nbsp;fees</span>
                  <span className="text-xs text-pink-500 cursor-pointer">
                    Show fee breakup
                  </span>
                </div>
                <span className="text-sm">
                  ${Number(convenienceFee).toFixed(2)}
                </span>
              </div>
            </div>

              {/* Donation Section */}
              <div className="bg-gray-50 p-2 rounded">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-pink-500">★</span>
                      <span className="text-sm">Donate to BookAChange</span>
                    </div>
                    <div className="text-[10px] text-gray-500">
                      (₹1 per ticket will be added)
                    </div>
                    <div className="text-[10px] text-pink-500 cursor-pointer">
                      View T&C
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm">$0</div>
                    <div className="text-[10px] text-pink-500 cursor-pointer">
                      Add Rs. {selectedSeats.length}
                    </div>
                  </div>
                </div>
              </div>

              {/* Amount Payable */}
              <div className="bg-yellow-50 p-3 rounded flex justify-between items-center">
                <span className="text-sm font-medium">Amount Payable</span>
                <span className="text-sm font-medium">${Number(totalPayable).toFixed(2)}</span>
              </div>

        
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Checkout;
