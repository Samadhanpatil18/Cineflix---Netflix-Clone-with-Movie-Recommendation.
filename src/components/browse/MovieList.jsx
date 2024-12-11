import React from 'react';
import MovieCard from "./MovieCard.jsx";

const MovieList = ({title, movies}) => {

    if (!movies) return;

    return (
        <div className={"w-fit h-fit pb-5 flex gap-5 flex-col"}>
            <h1 className={"text-2xl ml-10 md:text-3xl font-bold"}>
                {title}
            </h1>
            {/*{console.log(movies[0])}*/}
            <div className={"w-screen px-10 h-fit flex gap-10 overflow-x-scroll scrollbar-none"}>
                {movies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie}/>
                })}
            </div>

        </div>
    );
};

export default MovieList;