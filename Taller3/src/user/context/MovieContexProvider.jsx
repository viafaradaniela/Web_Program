import { movieContext } from "./MovieContext";
import { useEffect, useState } from 'react';
import { getMovies } from "../services/fetchMovie";

export function MovieContextProvider({ children }) {
    const [movies, setMovies] = useState([]);
    // const [movieById, setMovieById] = useState([])

    useEffect(() => {
        getMovies().then((movies) => {
            setMovies(movies)
        });
    }, []);


    return (
        <movieContext.Provider value={{ movies }}>
            {children}
        </movieContext.Provider>
    )

}