import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRouter = ({ canActivate, redirectPath = "/" }) => {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

PrivateRouter.propTypes = {
  canActivate: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string,
};

export default PrivateRouter;
