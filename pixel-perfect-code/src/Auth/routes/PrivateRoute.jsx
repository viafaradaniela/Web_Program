import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function PrivateRoute({ children }) {
    const { isLogged } = useAuth()
    return isLogged ? children : <Navigate to='/' />
}