const apiUrl = process.env.NEXT_PUBLIC_TMDb_API_URL;
const apiKey = process.env.NEXT_PUBLIC_TMDb_API_KEY;

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: apiKey
    }
};

export async function fetchMovies() {
    try {
        const res = await fetch(`${apiUrl}3/discover/movie?include_adult=false&include_video=true&language=es-CO&page=1&sort_by=popularity.desc`, options);
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}

export async function fetchMovieData(id) {
    try {
        const res = await fetch(`${apiUrl}3/movie/${id}?language=es-CO`, options);
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}