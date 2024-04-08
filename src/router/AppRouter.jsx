import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import PrivateRouter from "./PrivateRouter";
import Register from "../pages/Register/Register";

const AppRouter = () => {
  const isAuthenticated = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PrivateRouter canActivate={isAuthenticated} redirectPath="/" />
          }
        >
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route
          element={
            <PrivateRouter canActivate={!isAuthenticated} redirectPath="/" />
          }
        >
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
