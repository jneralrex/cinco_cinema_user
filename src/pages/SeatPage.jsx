import React, { useState } from 'react';

const SeatPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  const seatStatus = {
    'A-1': 'sold',
    'A-2': 'sold',
    'A-3': 'sold',
    'A-4': 'sold',
    'B-3': 'sold',
    'B-4': 'sold',
    'C-3': 'sold',
    'C-4': 'sold',
  };

  const handleSeatClick = (seatId) => {
    if (seatStatus[seatId] === 'sold') return;
    
    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(seat => seat !== seatId);
      }
      if (prev.length >= 3) return prev;
      return [...prev, seatId];
    });
  };

  const getSeatStatus = (seatId) => {
    if (seatStatus[seatId] === 'sold') return 'bg-gray-200 border-gray-300 cursor-not-allowed text-gray-500';
    if (selectedSeats.includes(seatId)) return 'bg-green-500 border-green-500 text-white';
    return 'bg-white border-green-500 hover:bg-green-50';
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-5">
        <div>
          <h2 className="text-xl font-semibold">Mufasa: The Lion King</h2>
          <p className="text-sm text-gray-600">INOX: Megaplex, Inorbit Mall, Malad | Today, 29 Dec, 10:30 PM</p>
        </div>
        <div className="flex items-center gap-2">
          <span>3 Tickets</span>
          <button className="border border-gray-300 rounded p-1 hover:bg-gray-50">✎</button>
        </div>
      </div>

      {/* Price Info */}
      <div className="text-center text-gray-600 my-5">
        <p>Rs. 1370 INSIGNIA</p>
      </div>

      {/* Seating Layout */}
      <div className="flex flex-col gap-3 my-8">
        {rows.map(row => (
          <div key={row} className="flex items-center gap-3">
            <div className="w-8 text-center font-bold">{row}</div>
            <div className="flex gap-3 flex-1">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(seatNum => (
                <button
                  key={`${row}-${seatNum}`}
                  className={`w-8 h-8 border rounded-md flex items-center justify-center text-sm transition-colors
                    ${getSeatStatus(`${row}-${seatNum}`)}`}
                  onClick={() => handleSeatClick(`${row}-${seatNum}`)}
                  disabled={seatStatus[`${row}-${seatNum}`] === 'sold'}
                >
                  {seatNum}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Screen */}
      <div className="text-center my-10">
        <div className="h-2 bg-gradient-to-b from-white to-blue-100 rounded-full mx-auto w-4/5 mb-3 shadow-md"></div>
        <p className="text-sm text-gray-600">All eyes this way please!</p>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border border-green-500 rounded"></div>
          <span className="text-sm">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-green-500 border border-green-500 rounded"></div>
          <span className="text-sm">Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gray-200 border border-gray-300 rounded"></div>
          <span className="text-sm">Sold</span>
        </div>
      </div>
    </div>
  );
};

export default SeatPage;