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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Public Routes */}
      <Route path="signup" element={<SignUp />} />
      <Route path="sign-in" element={<SignIn />} />
    
      <Route element={<Nav />}>
        <Route path="home-page" element={<HomePage />} />
        <Route path="about-page" element={<AboutPage />} />
     
        <Route path="ProfilePage" element={<ProfilePage/>}/>
        <Route path="MovieDetail" element={<MovieDetail/>}/>
        <Route path="MovieDateTime" element={<MovieDateTime/>}/>

        <Route path="seat-page" element={<SeatPage />} />
        <Route path="seatCountModal-page" element={<SeatCountModal />} />
        <Route path="termsModal-page" element={<TermsModal />} />
        <Route path="booking-summary" element={<BookingSummary />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>

      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
