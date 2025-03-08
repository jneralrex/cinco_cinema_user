import React, { useEffect, useState } from 'react';
import SeatCountModal from '../pages/SeatCountModal';
import TermsModal from '../pages/TermsModal';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../component/Loader';

const SeatPage = () => {
  const params = useParams();
  const showtime_id = params.showtime_id;
  const movie_id = params.movie_id;
  // console.log(`${showtime_id}: ${movie_id}`);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [maxSeats, setMaxSeats] = useState(0);
  const [showSeating, setShowSeating] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  
  const [time_details, setTimeDetails] = useState({});
  const [movie_info, setMovieInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const theater = movie_info?.show_times?.find(theater => theater._id === showtime_id);
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { weekday: "long", day: "numeric", month: "short" };
    return date.toLocaleDateString("en-GB", options);
  }

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

  const PRICE_PER_SEAT = time_details?.price;

  const totalAmount = selectedSeats.length * PRICE_PER_SEAT;

  const theaterLocation = theater?.theatre_id?.theatreLocation?.location
    .map((loc) =>
      loc.cities.map((city) =>
        `${city.street} ${city.city} ${loc.state}`
      ).join(", ") // Join multiple cities with a comma
    ).join("; "); // Join multiple locations with a semicolon

  const movieDetails = {
    title: movie_info?.movie_id?.title || "N/A",
    language: 'English',
    format: 'INSIGNIA',
    theater: `${theater?.theatre_id?.theatreName} ${theaterLocation}`,
    date: formatDate(movie_info?.date),
    time: time_details?.time || "N/A",
    screen: `${time_details?.screen_id?.screenName || ""} ${time_details?.screen_id?.screenType || ""}`.trim()
  };


  const handleSeatClick = (seatId) => {
    if (seatStatus[seatId] === 'sold') return;
    
    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(seat => seat !== seatId);
      }
      if (prev.length >= maxSeats) return prev;
      return [...prev, seatId];
    });
  };

  const handleSelectSeats = (count) => {
    setMaxSeats(count);
    setShowModal(false);
    setShowSeating(true);
  };

  const getSeatStatus = (seatId) => {
    if (seatStatus[seatId] === 'sold') return 'bg-gray-200 border-gray-300 cursor-not-allowed text-gray-500';
    if (selectedSeats.includes(seatId)) return 'bg-green-500 border-green-500 text-white';
    return 'bg-white border-green-500 hover:bg-green-50';
  };

  const handlePaymentClick = () => {
    setShowTermsModal(true);
  };

  const handleTermsAccept = () => {
    setShowTermsModal(false);
    navigate('/booking-summary', { 
      state: { 
        selectedSeats,
        movieDetails,
        ticketPrice: PRICE_PER_SEAT,
        totalAmount: selectedSeats.length * PRICE_PER_SEAT 
      }
    });
  };

  const getShowDates = async () => {
    try {
      const resp = await axios.get(`${import.meta.env.VITE_BASE_URL}airingdate/${movie_id}`);
      // const resp = await axios.get(`http://localhost:5000/api/v1/airingdate/${movie_id}`);
      // console.log(resp.data.data);
      if(resp.status === 200){
        resp?.data?.data?.map((date)=>{
          date.show_times.find((times)=> times._id === showtime_id)
          ?.times?.map((time2)=>{
            // console.log(time2);
            setTimeDetails(time2)
          })
          // console.log(`date detail: ${date.show_times}`)
        })
        const matchedDate = resp?.data?.data?.find(date => 
          date.movie_id._id === movie_id && 
          date.show_times.some(show => show._id === showtime_id)
        );
        
        if (matchedDate) {
          // console.log("Matched Date:", matchedDate);
          setMovieInfo( matchedDate );
        } else {
          console.log("No matching movie and showtime found.");
        }              
      }
    } catch (error) {
      console.error("Error fetching showDates:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    getShowDates()
  },[]);

  if(loading) return <div className="h-[100vh]"><Loader /></div>;
  if (!showSeating) {
    return (
      <SeatCountModal 
        time_details={time_details}
        loading={loading}
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
        onSelectSeats={handleSelectSeats}
      />
    );
  };

  return (
    <div className="lg:max-w-7xl  md:px-[100px] mt-14 md:mt-20 lg:mt-0 mx-auto p-5">
  
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-5">
        <div>
          <h2 className="text-xl font-semibold">{movie_info?.movie_id?.title}</h2>
          <div className="text-xs lg:text-sm text-gray-600 block lg:flex items-center">
          <p>{movieDetails?.theater}</p>
          <p className='text-xs lg:text-sm'>| {formatDate(movie_info?.date)}, {time_details?.time}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className='text-sm lg:text-[16px]'>{maxSeats} Tickets</span>
          <button 
            className="border border-gray-300 rounded px-1 hover:bg-gray-50"
            onClick={() => setShowModal(true)}
          >
            ✎
          </button>
        </div>
      </div>

      {/* Price Info */}
      <div className="text-center text-gray-600 my-5">
        <p>${time_details?.price} INSIGNIA</p>
      </div>

      {/* Seating Layout */}
      <div className="flex flex-col items-center gap-4 w-[90%] m-auto">
        {rows.map(row => (
          <div key={row} className="flex flex-row items-center justify-center">
            <div className="w-8 text-center font-bold">{row}</div>
            <div className="flex gap-1 flex-1">
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



      {/* Terms Modal */}
      <TermsModal 
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        onAccept={handleTermsAccept}
      />

      <div className='fixed lg:relative bottom-0 right-0 left-0 z-10'>
        {/* Legend */}
        <div className="flex justify-center gap-6 lg:mt-5 bg-white border-t py-4 lg:relative">
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
        {/* Payment Button */}
        {selectedSeats.length > 0 && (
          <div className="lg:p-4 p-2 flex items-center justify-center bg-white border-t border-gray-200">
            <button 
              className="text-center items-center justify-center bg-purple-800 text-white lg:py-3 py-2 rounded-lg font-semibold hover:bg-purple-900 px-3 lg:px-20 transition-colors"
              onClick={handlePaymentClick}
            >
              Pay&nbsp;Rs.{totalAmount}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatPage;