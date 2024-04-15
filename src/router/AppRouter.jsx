import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import PrivateRouter from "./PrivateRouter";
import Register from "../pages/Register/Register";
import Applications from "../pages/Applications/Applications";
import DetailApplication from "../pages/DetailApplication/DetailApplication";
import DetailStage from "../pages/DetailStage/DetailStage";
import UsersByApplication from "../pages/UserByApplication/UserByApplication";
import CreateProcess from "../pages/CreateProcess/CreateProcess";
import ActiveProcesses from "../pages/ActiveProcesses/ActiveProcesses";
import { useAuth } from "../auth/AuthProvider";

const AppRouter = () => {
  const auth = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PrivateRouter
              canActivate={auth.isAuthenticated}
              redirectPath="/"
            />
          }
        >
          <Route path="/profile" element={<Profile />} />
          <Route path="/applications" element={<Applications />} />

          <Route
            element={
              <PrivateRouter
                canActivate={auth.user.typeProfile === "admin"}
                redirectPath="/applications"
              />
            }
          >
            <Route path="/createProcess" element={<CreateProcess />} />
            <Route path="/activeProcesses" element={<ActiveProcesses />} />
            <Route path="/candidates" element={<UsersByApplication />} />
            <Route path="/candidates/:idUser" element={<Applications />} />
            <Route
              path="/candidates/:idUser/:idProcess"
              element={<DetailApplication />}
            />
            <Route
              path="/candidates/:idUser/:idProcess/:idStage"
              element={<DetailStage />}
            />
          </Route>

          <Route
            path="/applications/:idProcess"
            element={<DetailApplication />}
          />
          <Route
            path="/applications/:idProcess/:idStage"
            element={<DetailStage />}
          />
        </Route>
        <Route
          element={
            <PrivateRouter
              canActivate={!auth.isAuthenticated}
              redirectPath="/profile"
            />
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
