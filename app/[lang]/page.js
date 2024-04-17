import MovieList from "@/app/components/MovieList";
import Sidebar from "../components/Sidebar";
import { getDictionary } from "./disctionaries";

const MoviesPage = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);
  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem] mx-auto">
        <Sidebar dict={dict} />
        <div className="content">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
            <MovieList dict={dict} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MoviesPage;
