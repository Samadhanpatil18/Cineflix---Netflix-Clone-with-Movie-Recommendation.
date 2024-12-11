import React from 'react';
import {API_OPTIONS} from "../utils/constants.js";

const useMovieInfo = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', API_OPTIONS)
    return await data.json();
};

export default useMovieInfo;