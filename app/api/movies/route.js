import data from "@/app/data/movieData";

export const GET = async () => {
  return Response.json(data);
};
