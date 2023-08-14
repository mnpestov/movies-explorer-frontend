import { Navigate, Outlet, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
  if (props.loggedIn) {
     return <Outlet/>
  } else {
    return <Navigate to="/" />;
  }
};
  
export default ProtectedRoute;