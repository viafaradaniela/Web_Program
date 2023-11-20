export const getMoviesById = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=f77007442c9f99b87f8591360c8997ee`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
};