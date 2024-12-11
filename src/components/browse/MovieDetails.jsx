import React, {useEffect, useState} from 'react';
import {API_OPTIONS} from "../../utils/constants.js";
import MovieList from "./MovieList.jsx";
import useMovieInfo from "../../hooks/useMovieInfo.jsx";

const MovieDetailsModal = ({movie, isOpen, onClose}) => {
    // const [movies, setMovies] = useState([])
    const [movieInfo, setMovieInfo] = useState(null)
    // useEffect(() => {
    //     recom();
    // }, [movies]);

    if (!isOpen) return null;
    if (!movie) return <div>Loading...</div>;

    // async function recom() {
    //     const data = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/recommendations?language=en-US&page=1`, API_OPTIONS)
    //     const json = await data.json();
    //     setMovies(json.results);
    // }
    async function getInfo() {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`, API_OPTIONS)
        const json = await data.json();
        setMovieInfo(json)
    }

    getInfo()

    // console.log(movie)
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className=" p-6 max-w-4xl w-full mx-auto rounded-lg relative">
                <div className="flex flex-col md:flex-row">
                    <button onClick={onClose}
                            className="absolute cursor-pointer top-0 right-0 sm:-mt-16  text-white text-3xl bg-red-600 rounded-full px-2">
                        &times;
                    </button>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full md:w-1/3 rounded-lg"
                    />
                    <div className="md:ml-6 flex-1 flex flex-col justify-center">
                        <h1 className="text-4xl font-bold">{movie.title}</h1>
                        <p className="mt-4">{movie.overview}</p>
                        {movieInfo && <div className="mt-6">
                            <h2 className="text-2xl font-bold">Genres</h2>
                            {movieInfo.genres.map((genre) => {
                                return <span>{genre.name} </span>
                            })}
                        </div>}
                        {/*<MovieList title={"Recommendations"} movie={movies} />*/}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsModal;
