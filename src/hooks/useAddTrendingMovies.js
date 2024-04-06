import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useAddTrendingMovies = () =>{
    const dispatch = useDispatch();

    const getTrendingMovies = async() => {
        const resposne = await fetch('https://api.themoviedb.org/3/movie/popular?page=2',API_OPTIONS);
        const json = await resposne.json();
        console.log(json.results);
        dispatch(addTrendingMovies(json.results));
    }

    useEffect (()=>{getTrendingMovies()},[])
    

}

export default useAddTrendingMovies;