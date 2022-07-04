import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuth-context";

export function RequiresAuth(children) {
  const isLogIn = useUserAuth();
  return isLogIn ? children : <Navigate to="/login" />;
}
