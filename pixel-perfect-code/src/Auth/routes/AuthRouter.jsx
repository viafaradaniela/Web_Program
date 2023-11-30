import { Route, Routes } from "react-router-dom";
import { LogIn } from "../pages";

export function AuthRouter() {
    return (
            <Routes>
                <Route
                    path='/login'
                    element={<LogIn />} />
            </Routes>
    )
}