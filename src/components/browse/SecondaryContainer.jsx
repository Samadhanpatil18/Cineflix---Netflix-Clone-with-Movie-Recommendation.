import React from 'react';
import MovieList from "./MovieList.jsx";
import {useSelector} from "react-redux";
import usePopularMovies from "../../hooks/usePopularMovies.jsx";
import useTopRatedMovies from "../../hooks/useTopRatedMovies.jsx";

const SecondaryContainer = () => {

    const movies = useSelector((store) => store.movies);
    usePopularMovies();
    useTopRatedMovies()

    return (
        <div className={"bg-black w-screen "}>
            <div className={"flex flex-col md:-mt-52 relative z-20 bg-transparent"}>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
                <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
            </div>
        </div>
    );
};

export default SecondaryContainer;