import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Loader from '../component/Loader';
import Footer from '../component/Footer';

const CinemaPage = () => {
    const params = useParams();
    const cinemaId = params.id;

    const [cinema, setCinema] = useState({});
    const [movies_by_cinema, setMoviesByCinema]= useState([]);
    const [loading, setLoading]=useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;
    const totalPages = Math.ceil(movies_by_cinema.length / rowsPerPage);

    const displayedMovie = movies_by_cinema.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const fetchAllMovieByCinema = async () => {
        try {
        // const resp = await Api.get(`movies/theater?theatre_id=${loggedAdminTheater}`);
        const resp = await axios.get(`${import.meta.env.VITE_BASE_URL}movies?cinema_id=${cinemaId}`)
        // console.log(resp)
        if(resp.status === 200){
            setLoading(false);
            setMoviesByCinema(resp.data.data)
            // setCurrentPage(resp.data.currentPage)
        }
        } catch (error) {
        console.log('Error fetching all movies for a cinema', error)
        }
    };

    const getCinemaById = async () => {
        try {
            const resp = await axios.get(`${import.meta.env.VITE_BASE_URL}cinema/cinema/${cinemaId}`);
            // console.log(resp.data.cinema);
            if(resp.status === 200){
                setCinema(resp.data.cinema);
                setLoading(false);
            }
        } catch (error) {
            console.log(" Error fetching cinema by id", error);
        }
    }
    useEffect(() => {
        fetchAllMovieByCinema();
        getCinemaById();
    },[ cinemaId ]);

    if(loading) return <div className='h-[70vh]'><Loader/></div>
  return (
    <div className='mt-16 lg:mt-0 mb-5 md:mt-24'>
        <div className='bg-purple-300/50 md:h-[50vh] h-[30vh] flex justify-center items-center mb-10'>
            <div>
                <h1 className='text-[40px] md:text-[4rem] lg:text-[5rem] font-bold leading-none text-purple-800'>{cinema?.cinemaName} Cinema</h1>
                <p className='text-right text-sm md:text-[16px] leading-none'>Contact us: {cinema?.cinemaEmail}</p>
            </div>
        </div>
        <div className='xl:w-[80%] w-[90%] mx-auto mb-5'>
            <h1 className='lg:text-[26px] text-lg md:text-xl font-bold mb-2'>Movies by {cinema?.cinemaName}</h1>
            {
                loading ? (
                    <div className='h-[300px]'><Loader /></div>
                ) :(
                <div className='grid lg:grid-cols-5 grid-cols-3 md:grid-cols-4 xl:gap-8 gap-3'>
                    {
                    displayedMovie?.length > 0 ? (
                        displayedMovie.map((movie)=>(
                        <div key={movie._id} className='group'>
                            <Link to={`/movie-detail/${movie?._id}`}>
                                <div className='md:mb-2 h-[170px] w-[110px] xl:h-[320px] lg:h-[250px]  md:h-[230px] lg:w-full md:w-[150px]'>
                                    <img src={movie?.thumbnail?.url} alt={movie?.title} className='rounded h-full' />
                                </div>
                                <div>
                                    <h1 className='font-semibold lg:text-lg md:text-[16px] leading-tight text-sm line-clamp-2 group-hover:underline'>{movie?.title}</h1>
                                    <p className='text-gray-500 hidden md:block md:text-sm line-clamp-1'>{movie?.genre}</p>
                                </div>
                            </Link>
                            </div>
                        ))
                    ): (
                        <p>No Movie Found</p>
                    )
                    }
                </div>
                )
                }
        </div>
        <div className="flex justify-end md:gap-10 md:text-lg gap-5 text-sm items-center xl:w-[80%] w-[90%] mx-auto mt-4 mb-10">
            <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="text-blue-500 disabled:text-gray-300 underline"
            >
                Previous
            </button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="text-blue-500 disabled:text-gray-300 underline"
            >
                Next
            </button>
        </div>
        <Footer />
    </div>
  )
}

export default CinemaPage
