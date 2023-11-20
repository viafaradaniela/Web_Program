import { useContext } from "react";
import { AuthContext } from "../context/authContex";

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('The component its not in the provider')
    }

    const {
        isLogged,
        logIn,
        logOut
    } = context

    return {
        isLogged,
        logIn,
        logOut
    }
}