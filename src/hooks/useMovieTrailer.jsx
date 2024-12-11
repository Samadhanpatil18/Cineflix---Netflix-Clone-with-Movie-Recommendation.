import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {API_OPTIONS} from "../utils/constants.js";
import {addTrailerVideo} from "../utils/moviesSlice.js";

const useMovieTrailer = (id) => {
    const dispatch = useDispatch();
    // const movieTrailer = useSelector(store => store.trailerVideo)
    const getMovieVideos = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            API_OPTIONS
        )
        const json = await data.json();
        const filterTrailer = json.results.filter(item => item.type === 'Trailer');
        const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        // !movieTrailer &&
        getMovieVideos();
    }, [])

};

export default useMovieTrailer;