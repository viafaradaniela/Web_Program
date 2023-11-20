import { useState } from "react";
import { AuthContext } from "./authContex";

const initalLogState = JSON.parse(window.localStorage.getItem("isLogged")) ?? false;

export function AuthContextProvider({ children }) {
    const [isLogged, setIsLogged] = useState(initalLogState)

    const logIn = (user) => {
        if (user) {
            setIsLogged(true)
            localStorage.setItem("isLogged", JSON.stringify(true))
        }
        console.log(user);
    }

    const logOut = () => {
        setIsLogged(false)
        localStorage.setItem("isLogged", JSON.stringify(false))

    }
    return (
        <AuthContext.Provider value={
            {
                isLogged,
                logIn,
                logOut
            }
        }>
            {
                children
            }
        </AuthContext.Provider>
    )


}