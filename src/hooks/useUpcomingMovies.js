import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () =>{
      const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=2',API_OPTIONS);
      const json = await response.json();
      console.log(json.results);
      dispatch(addUpcomingMovies((json.results)));
    }
    
    useEffect(
      ()=> {getUpcomingMovies();},
   [])
}

export default useUpcomingMovies;