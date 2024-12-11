import {useDispatch, useSelector} from "react-redux";
import {addLoadingState} from "../../utils/loadSlice.js";
import MovieList from "../browse/MovieList.jsx";
import React from "react";

const GPTSuggestion = () => {
    const dispatch = useDispatch();
    const loadingState = useSelector((store) => store.loader.loadingState);

    const gptMovies = useSelector((store) => store.gpt.gptMovieResult);
    if (!gptMovies) return null;

    let movies = []

    gptMovies.map(arr => {
        if (arr.length > 0) {
            movies.push(arr[0])
        }
    })

    // console.log(loadingState)
    if (loadingState === "fetching details")
        dispatch(addLoadingState(null))

    if(loadingState) return null
    return (
        <div className={"bottom-20 md:bottom-4 z-0"}>
            <MovieList movies={movies} title={""}/>
        </div>
    );
};

export default GPTSuggestion;