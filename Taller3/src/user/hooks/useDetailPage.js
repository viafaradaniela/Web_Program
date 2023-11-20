import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMoviesById } from "../services/fetchDetail";


export const useDetailPage = () => {
    const [movieById, setMovieById] = useState([])


    const { id } = useParams()

    useEffect(() => {
        getMoviesById(id).then((movie) => {
            setMovieById(movie)
        });
    }, [id]);
    console.log(movieById);

    return {
        movieById
    }

}