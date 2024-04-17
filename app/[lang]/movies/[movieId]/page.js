import MovieDetails from "@/app/components/MovieDetails";

const MovieDetailsPage = async ({ params: { movieId } }) => {
  return <MovieDetails movieId={movieId} />;
};

export default MovieDetailsPage;
