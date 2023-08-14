// import React from "react";
// import { Route, Navigate } from "react-router-dom";

// // этот компонент принимает другой компонент в качестве пропса
// // он также может взять неограниченное число пропсов и передать их новому компоненту
// export const ProtectedRoute = ({ component: Component, ...props }) => {
//     console.log(props.loggedIn);
//   return (
//     <Route>
//       {() =>
//         props.loggedIn ? <Component {...props} /> : <Navigate to="/"/>
//       }
//     </Route>
//   );
// };

import { Navigate, Outlet, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
    console.log(props.loggedIn);
  if (props.loggedIn) {
     return <Outlet/>
  } else {
    return <Navigate to="/" />;
  }
};
  
export default ProtectedRoute;