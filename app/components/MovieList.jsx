import { getAllMovies } from "@/utils/getAllMovies";
import MovieCard from "./MovieCard";

const MovieList = async ({ dict }) => {
    const allMovies = await getAllMovies()
    const movies = allMovies.movieList
    return (
        movies ? (
            movies?.map((movie) => (<MovieCard key={movie.id} movie={movie} dict={dict} />))
        ) : ("No movies found")
    )
}

export default MovieList
