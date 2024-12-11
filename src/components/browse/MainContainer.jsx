import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import VideoBg from "./VideoBg.jsx";
import VideoTitle from "./VideoTitle.jsx";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies.jsx";

const MainContainer = () => {
    useNowPlayingMovies();
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies) return;
    const mainMovie = movies[0];
    const {original_title, overview, id} = mainMovie;

    return (
        <div className='w-full h-full bg-black'>
            <VideoTitle
                title={original_title}
                overview={overview}/>
            <VideoBg
                id={id}/>
        </div>
    );
};

export default MainContainer;