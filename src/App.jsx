import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import ProfilePage from "./pages/ProfilePage";
import MovieDetail from "./pages/MovieDetail";
import MovieDateTime from "./pages/MovieDateTime";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Public Routes */}
      <Route path="signup" element={<SignUp />} />
      <Route path="sign-in" element={<SignIn />} />


      <Route >
        <Route path="ProfilePage" element={<ProfilePage/>}/>
        <Route path="MovieDetail" element={<MovieDetail/>}/>
        <Route path="MovieDateTime" element={<MovieDateTime/>}/>
      </Route>

      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
