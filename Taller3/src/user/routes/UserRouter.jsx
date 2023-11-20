import { Route, Routes } from "react-router-dom";
import { DashboardPage, MovieDetailPage } from "../pages";
import { PrivateRoute } from "../../auth/routes/PrivateRoute"
import { MovieContextProvider } from "../context/MovieContexProvider";

export function UserRouter() {
    return (
        <MovieContextProvider>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <DashboardPage />
                        </PrivateRoute>
                    } />
                <Route
                    path="/movie/:id"
                    element={
                        <MovieDetailPage />
                    } />
            </Routes>
        </MovieContextProvider>
    )

}