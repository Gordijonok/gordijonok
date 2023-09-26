import { Navigate, useLocation } from "react-router-dom";

import { getDataFromLS } from "../function/function";

export function PrivateRoute({ children }) {
  const location = useLocation();
  const isAuthorized = getDataFromLS("isAuthorized", '""');

  if (!isAuthorized) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
}
