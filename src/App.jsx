import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SeatPage from "./pages/SeatPage";
import SeatCountModal from "./pages/SeatCountModal";
import TermsModal from "./pages/TermsModal";
import BookingSummary from "./pages/BookingSummary";
import Checkout from "./pages/Checkout";
import ProfilePage from "./pages/ProfilePage";
import MovieDetail from "./pages/MovieDetail";
import MovieDateTime from "./pages/MovieDateTime";
import Nav from "./component/Nav";
import NotFound from "./component/NotFound";
import CinemaPage from "./pages/CinemaPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Public Routes */}
     
      <Route element={<Nav />}>
        <Route index element={<HomePage />} />
        <Route path="movie-detail/:id" element={<MovieDetail />} />
        <Route path="movie-date-time/:id" element={<MovieDateTime />} />
        <Route path="seat-page/:showtime_id/:movie_id" element={<SeatPage />} />
        <Route path="about-page" element={<AboutPage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="profile-page" element={<ProfilePage />} />
        <Route path="cinema/:id" element={<CinemaPage />} />
        <Route path="seat-page" element={<SeatPage />} />
        <Route path="booking-summary" element={<BookingSummary />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
