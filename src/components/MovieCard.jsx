import React from 'react'
import { IMG_CDN } from '../utils/constants'


const MovieCard = ({ poster }) => {
    if (!poster) return null;
    return (
      <div className="w-40 h-50 pr-4 mb-4">
        <img className="w-full h-full object-cover" alt="Movie Card" src={IMG_CDN + poster} />
      </div>
    );
  };
  
  export default MovieCard;