import React, { useEffect, useState } from 'react'
import { API_OPTIONS, IMG_CDN } from '../utils/constants'



const MovieCard = ({movieId,poster }) => {
    const [trailerKey, setTrailerKey] = useState(null);

    const fetchTrailer = async () => {
      
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
          API_OPTIONS
        );
  
        const json = await response.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        setTrailerKey(trailer?.key);
        
    };
  
    useEffect(() => {
      fetchTrailer();
    }, [movieId]);
  
    const redirectToTrailer = () => {
      if (trailerKey) {
        window.open(`https://www.youtube.com/watch?v=${trailerKey}`, '_blank');
      } else {
        console.error('Trailer key not available');
      }
    };
  
    
    
    
    if (!poster) return null;
    
    // console.log({movie_id});

    return (
      <div className="w-40 h-50 pr-4 mb-4">
        <img onClick={redirectToTrailer} className="w-full h-full object-cover cursor-pointer transition-transform duration-300 transform-gpu hover:scale-110" alt="Movie Card" src={IMG_CDN + poster} />
      </div>
    );
  };
  
  export default MovieCard;