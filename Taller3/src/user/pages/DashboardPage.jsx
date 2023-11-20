import { Link } from 'react-router-dom';
import { useDashboard } from '../hooks/useDashboard';
import { useAuth } from '../../auth/hooks/useAuth';
import "./DPage.css";


export function DashboardPage() {
  const { movies } = useDashboard()
  const { logOut } = useAuth()

  // Función para cambiar el estilo de la fecha
  const formatReleaseDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  const handleOnClick = () => {
    logOut()
    //poner logica de cambiar estado de login
    console.log("click");
  }


  return (
    <div className="dashboard-container">
      <h1>Trending Movies</h1>
      <div className='head'>
        <img className="logo2" src="logo.png" alt="Logo" />
        <button className="boton-logOut" onClick={handleOnClick}>Log Out</button>
      </div>
      <div className="movie-posters">


        {movies.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title || movie.name} />
            <div className="movie-info">
              <p className="title">{movie.title || movie.name}</p>
              <p className="date">{formatReleaseDate(movie.release_date)}</p>
            </div>
          </Link>
        ))}



      </div>
    </div>
  );
}


