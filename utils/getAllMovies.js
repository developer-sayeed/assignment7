export const getAllMovies = async () => {
  const movieModule = await import("../db.json");
  const movies = movieModule.default;

  return movies;
};
