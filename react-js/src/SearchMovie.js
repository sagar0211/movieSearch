
import React,{useState} from "react"
import MovieCard from "./movieCard"

export default function SearchMovie(){

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [apiCalled,setApiCall] = useState(false);

    async function searchMovie(e){
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=c33832369178e4ae690545fea0aee656&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
            if(validateForm(query)) {
                const res = await fetch(url);
                const data  = await res.json();
                setMovies(data.results);
                setApiCall(true);
            }
        }
        catch(err){
            console.error(err);
        }
    }   

    function showList() {
        if(movies.length) {
            return (
                <div>
                    <div className="card-list">
                    {
                        movies.filter(movie => movie.poster_path)
                            .map(movie => (
                                <MovieCard movie={movie} key={movie.id} />
                            )
                        )
                    }
                    </div>
                    <br/><br/><br/>
                    <footer className = "foot" >Thank you for visiting!!</footer>
                </div>
                
                
            )
        } else if(!movies.length && apiCalled){
            return (
                <div>
                    <div className="notFound" >Sorry,there are no movies that matched your input.</div>
                    <br/><br/><br/>
                    <footer className = "foot" >Thank you for visiting!!</footer>
                </div>
            )
        }
    }

    return(
        <div>
            <form className = "form" onSubmit = {searchMovie}>
                <label 
                    className = "label" 
                    htmlFor="query">
                What movies are you searching for? 
                </label>
                <input 
                    className = "input" 
                    type = "text" 
                    name = "query" 
                    placeholder = "search your movie" 
                    value={query} 
                    required
                    onChange={(e) => setQuery(e.target.value)}
                />

                <button 
                    className = "button" 
                    type ="submit">
                Search
                </button>
                <br />
            </form>

            {showList()}
        
        </div>
    )
}


function validateForm(query) {
    if (query === "") {
      alert("Please check your input again")
      return false;
    }
    return true;
}