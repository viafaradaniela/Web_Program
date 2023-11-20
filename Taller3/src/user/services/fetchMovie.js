export const getMovies = async () => {
    const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=f77007442c9f99b87f8591360c8997ee";
    try {
        const res = await fetch(url);
        const data = await res.json();
        const results = data.results
        return results;
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
};

