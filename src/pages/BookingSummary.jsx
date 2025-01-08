import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const FoodItem = ({ image, name, description, price, onAdd }) => (
  <div className="bg-white p-4 rounded-2xl shadow-md">
    <div className="flex flex-col h-full">
      <div className="flex items-start gap-2 mb-2">
        <span className="text-green-600 text-lg">✓</span>
        <img src={image} alt={name} className="w-16 h-16 object-contain" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-sm">{name}</h3>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="font-medium">₹{price}</span>
        <button 
          onClick={onAdd}
          className="border border-pink-500 text-pink-500 px-4 py-1 rounded-sm text-sm hover:bg-pink-50"
        >
          Add
        </button>
      </div>
    </div>
  </div>
);

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isConsentChecked, setIsConsentChecked] = useState(false);
  const [ticketType, setTicketType] = useState('m-ticket');

  // Enhanced validation for required state data
  if (!location.state?.selectedSeats || !location.state?.movieDetails) {
    navigate('/seats');
    return null;
  }
  
  const scrollToSection = () => {
    const section = document.getElementById('payment');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  };

  const { selectedSeats, movieDetails, ticketPrice = 400 } = location.state;
  
  // Calculate prices based on actual selected seats
  const basePrice = selectedSeats.length * ticketPrice;
  const convenienceFee = Math.round((basePrice * 0.118) * 100) / 100; // 11.8% convenience fee
  const subTotal = basePrice + convenienceFee;
  const totalPayable = subTotal;

  const handleProceed = () => {
    if (!isConsentChecked) {
      alert('Please accept the terms to proceed');
      return;
    }

    navigate('/checkout', {
      state: {
        selectedSeats,
        movieDetails,
        basePrice,
        convenienceFee,
        totalPayable,
        ticketType
      }
    });
  };

  const foodItems = [
    {
      id: 1,
      name: "Medium Cheese Popcorn 180g",
      description: "Medium Cheese Popcorn 180g (564 Kcal | Allergens: Milk)",
      price: 570,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000130_08082024153612.png"
    },
    {
      id: 2,
      name: "Regular Salted Popcorn 90g",
      description: "Regular Salted Popcorn 90g (425 Kcal | Allergens: Milk)",
      price: 420,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000130_08082024153612.png"
    },
    {
      id: 3,
      name: "Medium Coke 675ml",
      description: "Medium Coke (675ml | 297 Kcal)",
      price: 380,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/1020011_17082018145045.png"
    },
    {
      id: 4,
      name: "Medium Salted Popcorn 180g",
      description: "Medium Salted Popcorn 180g (564 Kcal | Allergens: Milk)",
      price: 520,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000130_08082024153612.png"
    },
    {
      id: 5,
      name: "Paneer Tikka Sandwich 190g",
      description: "Paneer Tikka Sandwich 190g (253 Kcal | Allergens: Milk, Wheat, Soybean, Cumin)",
      price: 320,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000130_08082024153612.png"
    },
    {
      id: 6,
      name: "Medium Cheese Popcorn 180g",
      description: "Medium Cheese Popcorn 180g (564 Kcal | Allergens: Milk)",
      price: 570,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000130_08082024153612.png"
    },
    {
      id: 7,
      name: "Regular Salted Popcorn 90g",
      description: "Regular Salted Popcorn 90g (425 Kcal | Allergens: Milk)",
      price: 420,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000130_08082024153612.png"
    },
    {
      id: 8,
      name: "Medium Coke 675ml",
      description: "Medium Coke (675ml | 297 Kcal)",
      price: 380,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/1020011_17082018145045.png"
    },
    {
      id: 9,
      name: "Medium Salted Popcorn 180g",
      description: "Medium Salted Popcorn 180g (564 Kcal | Allergens: Milk)",
      price: 520,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000130_08082024153612.png"
    },
    {
      id: 10,
      name: "Paneer Tikka Sandwich 190g",
      description: "Paneer Tikka Sandwich 190g (253 Kcal | Allergens: Milk, Wheat, Soybean, Cumin)",
      price: 320,
      image: "https://in.bmscdn.com/fnb/v3/xxhdpi/2000130_08082024153612.png"
    },
    // Add more items as needed
  ];

  return (
    <div className="lg:max-w-7xl mt-14 lg:mt-0 mx-auto p-5">
      <div className='shadow-xl z-10 fixed bottom-5 lg:hidden flex justify-end left-0 right-0 px-5 py-2'>
        <button onClick={scrollToSection} className=' size-14 text-sm leading-none rounded-full bg-purple-800 border text-white shadow-lg'>Skip meal</button>
      </div>
      <div className="lg:flex gap-6">
        {/* Food Pre-booking Section */}
        <div className="flex-1">
          {/* Banner */}
          <div className="mb-6">
            <img 
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1688188454571_855x95.jpg" 
              alt="Food pre-booking banner" 
              className="w-full rounded-lg"
            />
          </div>

          {/* Title */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-center">Grab a bite!</h2>
            <p className="text-center text-gray-600">Prebook Your Meal and Save More!</p>
          </div>

          {/* Categories */}
          <div className="flex gap-4 mb-6 text-xs lg:text-[16px]">
            <button className="bg-purple-800 text-white px-4 py-2 rounded-sm">ALL</button>
            <button className="text-gray-600 px-4 py-2">POPCORN</button>
            <button className="text-gray-600 px-4 py-2">BEVERAGES</button>
            <button className="text-gray-600 px-4 py-2">SNACKS</button>
          </div>

          {/* Food Items Grid */}
          <div className="grid grid-cols-2 gap-4">
            {foodItems.map(item => (
              <FoodItem
                key={item.id}
                {...item}
                onAdd={() => console.log(`Added ${item.name}`)}
              />
            ))}
          </div>

          {/* Notes Section */}
          <div className="mt-8 text-xs text-gray-600">
            {/* Note Section */}
            <div className="mb-4">
              <p className="text-gray-500 mb-1">Note:</p>
              <ol className="list-decimal pl-5 space-y-1 text-gray-500">
                <li>Images are for representation purposes only.</li>
                <li>Prices inclusive of taxes.</li>
                <li>All nutritional information is indicative, values are per serve as shared by the Cinema and may vary depending on the ingredients and portion size.</li>
                <li>An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.</li>
              </ol>
            </div>

            {/* Inox T&C Section */}
            <div>
              <p className="text-gray-500 mb-1">Inox T&C:</p>
              <ol className="list-decimal pl-5 space-y-1 text-gray-500">
                <li>Children above the age of 3 will need a separate ticket, children will not be allowed in Adult movie.</li>
                <li>Please carry a valid age proof for A rated movies - 18 years and over only would be given entry.</li>
                <li>Tickets are not refundable or transferable.</li>
                <li>Outside food and beverages are not allowed. Right of admission is reserved.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Booking Summary Section */}
        <div id='payment' className="mt-5 lg:w-[400px]">
          <div className="bg-white rounded-lg border shadow p-6">
            <h2 className="text-sm font-medium text-gray-700 mb-4">BOOKING SUMMARY</h2>
            
            {/* Ticket Details */}
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm">
                    {selectedSeats.join(',')} ({selectedSeats.length} Tickets)
                  </p>
                  <p className="text-xs text-gray-500">SCREEN 4</p>
                </div>
                <p className="text-sm">Rs. {basePrice.toFixed(2)}</p>
              </div>

              {/* Convenience Fee */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span className="text-sm">Convenience fees</span>
                </div>
                <p className="text-sm">Rs. {convenienceFee.toFixed(2)}</p>
              </div>

              {/* Sub Total */}
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-sm">Sub total</span>
                <span className="text-sm">Rs. {subTotal.toFixed(2)}</span>
              </div>

              {/* Donation Section */}
              <div className="bg-gray-50 p-4 rounded">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-pink-500">★</span>
                      <span className="text-sm">Donate to BookAChange</span>
                    </div>
                    <div className="text-[10px] text-gray-500">
                      (₹1 per ticket has been added)
                    </div>
                    <div className="text-[10px] text-pink-500 cursor-pointer">
                      View T&C
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm">Rs. 0</div>
                    <div className="text-[10px] text-pink-500 cursor-pointer">Add Rs. 4</div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="text-xs text-gray-500">
                Your current state is Maharashtra
              </div>

              {/* Amount Payable */}
              <div className="bg-yellow-50 p-3 rounded flex justify-between items-center">
                <span className="text-sm font-medium">Amount Payable</span>
                <span className="text-sm font-medium">Rs. {totalPayable.toFixed(2)}</span>
              </div>

              {/* Ticket Type Selection */}
              <div>
                <p className="text-xs text-gray-600 mb-2">SELECT TICKET TYPE</p>
                <div className="flex gap-4 mb-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="ticketType" 
                      value="m-ticket"
                      checked={ticketType === 'm-ticket'}
                      onChange={(e) => setTicketType(e.target.value)}
                      className="text-pink-500" 
                    />
                    <span className="text-sm">M-Ticket</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="ticketType" 
                      value="box-office"
                      checked={ticketType === 'box-office'}
                      onChange={(e) => setTicketType(e.target.value)}
                      className="text-pink-500" 
                    />
                    <span className="text-sm">Box Office Pickup</span>
                  </label>
                </div>
                <p className="text-[10px] text-gray-500">
                  Show the m-ticket QR Code on your mobile to enter the cinema.
                </p>
              </div>

              {/* Terms and Proceed Button */}
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <input 
                    type="checkbox" 
                    className="mt-1"
                    checked={isConsentChecked}
                    onChange={(e) => setIsConsentChecked(e.target.checked)}
                  />
                  <p className="text-[10px] text-gray-600">
                    By proceeding, I express my consent to complete this transaction.
                  </p>
                </div>

                <button 
                  onClick={handleProceed}
                  className="w-full bg-purple-800 text-white py-3 rounded flex justify-between items-center px-4"
                >
                  <span>TOTAL: Rs {totalPayable.toFixed(2)}</span>
                  <span>Proceed</span>
                </button>

                <p className="text-[10px] text-gray-500">
                  You can cancel the tickets 20 min(s) before the show. Refunds will be done according to{' '}
                  <span className="text-pink-500 cursor-pointer">Cancellation Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;