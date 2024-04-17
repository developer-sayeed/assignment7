import Modal from "@/app/components/Modal";
import MovieDetails from "@/app/components/MovieDetails";

const MovieModal = ({ params: { movieId } }) => {
  return (
    <Modal>
      <MovieDetails movieId={movieId} />
    </Modal>
  );
};

export default MovieModal;
