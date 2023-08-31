import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (props) => {
  const isAuth = localStorage.getItem('isAuth');
  if (isAuth) {
     return <Outlet/>
  } else {
    return <Navigate to="/" />;
  }
};
  
export default ProtectedRoute;