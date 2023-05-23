import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const PrivateRoutes = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return <Outlet />;

  return <div>PrivateRoutes</div>;
};

export default PrivateRoutes;
