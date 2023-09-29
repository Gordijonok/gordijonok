import { Navigate, useLocation } from "react-router-dom";

import { getDataFrom } from "../function/function";

export function PrivateRoute({ children }) {
  const location = useLocation();
  const isAuthorized = getDataFrom("isAuthorized", '""');

  if (!isAuthorized) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
}
