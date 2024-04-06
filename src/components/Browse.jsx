import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useAddTrendingMovies from '../hooks/useAddTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';



const Browse = () => {

  useNowPlayingMovies();
  useAddTrendingMovies();
  useUpcomingMovies();
   
  return (
    <div >
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      </div>
  )
}

export default Browse