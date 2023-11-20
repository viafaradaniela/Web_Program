import { useContext } from "react";
import { movieContext } from "../context/MovieContext";

export const useDashboard = () => {
    const context = useContext(movieContext)
    if (!context) {
        throw new Error("el componente no esta en el provider")
    }
    const { movies } = context
    return {
        movies
    }

}