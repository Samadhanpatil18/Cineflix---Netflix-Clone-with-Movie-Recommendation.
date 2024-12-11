import React, {useEffect} from 'react';
import {API_OPTIONS} from "../utils/constants.js";
import {addNowPlayingMovies, addTopRatedMovies} from "../utils/moviesSlice.js";
import {useDispatch, useSelector} from "react-redux";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.topRatedMovies);
    const getTopRatedMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=IN',
            API_OPTIONS);

        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
    }, [])

};

export default useTopRatedMovies;