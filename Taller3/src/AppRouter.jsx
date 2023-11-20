import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./auth/pages/LodingPage";
import { UserRouter } from "./user/routes/UserRouter";

export function AppRouter() {
    return (
        <main>
            <Routes>
                <Route
                    path='/login'
                    element={<LoginPage />}
                />
                <Route
                    path="/*"
                    element={
                        <UserRouter />
                    } />
            </Routes>
        </main>
    )
}