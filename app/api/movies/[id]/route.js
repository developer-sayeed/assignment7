import data from "@/app/data/movieData";

export const GET = async (_request, { params }) => {
  const movieID = params.id;
  const movie = data.find((item) => item.id === parseInt(movieID));
  if (!movie) {
    return Response.json(`There is no movie with ${movieID} id`);
  }
  return Response.json(movie);
};

export const PATCH = async (request, { params }) => {
  const movieID = params.id;
  const updatedTitle = await request.json();
  const movieIndex = data.findIndex((item) => item.id === parseInt(movieID));

  data[movieIndex].title = updatedTitle.title;

  return Response.json(data[movieIndex]);
};

export const DELETE = async (request, { params }) => {
  const movieID = params.id;
  const movieIndex = data.findIndex((item) => item.id === parseInt(movieID));
  const deletedMovie = data[movieIndex];
  data.splice(movieIndex, 1);

  return Response.json(deletedMovie);
};
