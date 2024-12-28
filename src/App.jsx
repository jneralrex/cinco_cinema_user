import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Public Routes */}
      <Route path="signup" element={<SignUp />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Route>
  ))


  const App = () => {
    return <RouterProvider router={router} />;
  };
  
  export default App;
