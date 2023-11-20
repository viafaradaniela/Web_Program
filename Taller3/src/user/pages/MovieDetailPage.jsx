import { useDetailPage } from "../hooks/useDetailPage"
import "./DetailPage.css";

export function MovieDetailPage() {
    const { movieById } = useDetailPage()
    const { title, tagline, poster_path, release_date, overview, runtime } = movieById
    return (

        <>
            <div className="detail-container">
                <div className="movie_card" id="tomb">
                    <div className="info_section">
                        <div className="movie_header">
                            <img className="locandina" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`movie poster: ${title}`} />
                            <h1>{title}</h1>
                            <h4>Release Date: {release_date}</h4>
                            <span className="minutes">Duration: {runtime} Minutes</span>
                            <p className="type">{tagline}</p>
                        </div>
                        <div className="movie_desc">
                            <h1>Description</h1>

                            <p className="text">
                                {overview}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}