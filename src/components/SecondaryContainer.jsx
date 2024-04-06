import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.NowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.TrendingMovies} />
          {/* <MovieList title={"Popular"} movies={movies.popularMovies} /> */}
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.UpcomingMovies}
          />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;