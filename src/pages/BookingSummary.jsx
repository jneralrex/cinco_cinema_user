import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
  
  // If no state is passed, redirect back to seats page
  if (!location.state) {
    navigate('/seats');
    return null;
  }

  const { selectedSeats } = location.state;
  const basePrice = 760.00;
  const convenienceFee = 89.68;
  const totalPayable = 849.68;

  const movieDetails = {
    title: 'Mufasa: The Lion King (3D) (U)',
    language: 'English',
    format: '2D',
    theater: 'PVR: Citi Mall, Andheri (W) (SCREEN 3)',
    date: 'Mon, 30 Dec, 2024',
    time: '09:45 PM',
    screen: 'SCREEN 3',
    ticketId: 'PRP1LP11'
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

  const handleProceed = () => {
    navigate('/checkout', {
      state: {
        selectedSeats,
        movieDetails,
        basePrice,
        convenienceFee,
        totalPayable
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="flex gap-6">
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
          <div className="flex gap-4 mb-6">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-sm">ALL</button>
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
        <div className="w-[400px]">
          {/* Header Banner */}
          {/* <div className="mb-6">
            <img 
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1692874595339_fmcweb.jpg" 
              alt="Food pre-booking banner" 
              className="w-full rounded-lg"
            />
          </div> */}

          {/* Booking Summary Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4 text-red-300">BOOKING SUMMARY</h2>
            
            {/* Ticket Details */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p>{selectedSeats.join(', ')} ({selectedSeats.length} Tickets)</p>
                  <p className="text-sm text-gray-500">{movieDetails.screen}</p>
                </div>
                <p className="font-medium">Rs. {basePrice.toFixed(2)}</p>
              </div>

              {/* Convenience Fee */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span>Convenience fees</span>
                </div>
                <p className="font-medium">Rs. {convenienceFee.toFixed(2)}</p>
              </div>

              {/* Amount Payable */}
              <div className="bg-yellow-50 p-3 rounded-lg flex justify-between items-center">
                <span className="font-medium">Amount Payable</span>
                <span className="font-medium">Rs. {totalPayable.toFixed(2)}</span>
              </div>

              <button
                onClick={handleProceed}
                className="w-full bg-pink-500 text-white py-3 rounded-lg flex justify-between items-center px-4"
              >
                <span>TOTAL Rs. {totalPayable.toFixed(2)}</span>
                <span>Proceed</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;