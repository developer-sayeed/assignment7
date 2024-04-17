import MovieList from "@/app/components/MovieList";
import Sidebar from "@/app/components/Sidebar";
// import { getDictionary } from "../disctionaries";

const MoviesPage = async () => {
  // const dict = await getDictionary(lang);
  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem] mx-auto">
        <Sidebar />
        <div className="content">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
            <MovieList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MoviesPage;
