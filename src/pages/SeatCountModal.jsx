import React from 'react';

const SeatCountModal = ({ isOpen, onClose, onSelectSeats }) => {
  const [selectedCount, setSelectedCount] = React.useState(2);
  const seatNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[400px] max-w-[90%]">
        {/* Modal Content */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-6">How Many Seats?</h2>
          
          {/* Scooter Image */}
          <div className="flex justify-center mb-8">
            <img 
              src="/scooter.png" 
              alt="Scooter" 
              className="w-24 h-24"
            />
          </div>

          {/* Seat Number Selection */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {seatNumbers.map(num => (
              <button
                key={num}
                onClick={() => setSelectedCount(num)}
                className={`w-10 h-10 rounded-full ${
                  selectedCount === num
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                } transition-colors`}
              >
                {num}
              </button>
            ))}
          </div>

          {/* Price Info */}
          <div className="mb-6">
            <p className="text-center font-medium">3D CLUB</p>
            <p className="text-center">Rs. 150</p>
            <p className="text-green-500 text-sm">Available</p>
          </div>

          {/* Select Seats Button */}
          <button
            onClick={() => onSelectSeats(selectedCount)}
            className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition-colors"
          >
            Select Seats
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatCountModal;