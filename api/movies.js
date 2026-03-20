export default async function handler(req, res) {
    const query = req.query.q;

    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );

    const data = await response.json();
    res.status(200).json(data);
}