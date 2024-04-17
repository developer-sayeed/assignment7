import { notFound } from "next/navigation";

export const getSingleMovie = async (id) => {
  const movieModule = await import("../db.json");
  const movies = movieModule.default;
  const singleMovieData = movies.movieList.find((data) => data.id == id);
  if (!singleMovieData) {
    notFound();
  } else {
    return singleMovieData;
  }
};
