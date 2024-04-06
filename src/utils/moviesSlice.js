import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice(
    {
        name:"movies",
        initialState:{
            NowPlayingMovies: null,
            TrendingMovies: null,
            trailerVideo: null,
            UpcomingMovies: null
        },
        reducers:{
            addNowPlayingMovies : (state,action)=>{
                state.NowPlayingMovies = action.payload;
            },
            addTrailerVideo : (state,action)=>{
                state.trailerVideo = action.payload;

            },
            addTrendingMovies : (state,action)=>{
                state.TrendingMovies = action.payload;
            },
            addUpcomingMovies : (state,action)=>{
                state.UpcomingMovies = action.payload;
            }
        }
    }
);

export const{addNowPlayingMovies,addTrailerVideo,addTrendingMovies,addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;

