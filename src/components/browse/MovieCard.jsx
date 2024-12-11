import React, {useState} from 'react';
import {IMG_CDN} from "../../utils/constants.js";
import MovieDetailsModal from "./MovieDetails.jsx";

const MovieCard = ({movie}) => {
    const title = movie.title;
    // console.log(movie.id)
    const poster = IMG_CDN + movie.poster_path;
    // const poster = IMG_CDN + useGetBanner(movie.id);
    const [isModalOpen, setIsModalOpen] = useState(false);
    if (!poster) return null



    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="flex flex-col gap-2 cursor-pointer" onClick={handleCardClick}>
                <div
                    className="w-[150px] h-[200px] md:min-w-[200px] md:h-[300px] rounded-xl bg-cover bg-center"
                    style={{backgroundImage: `url(${poster})`}}>
                </div>
                <div>
                    <h3 className="text-center text-sm md:text-lg">
                        {title}
                    </h3>
                </div>
            </div>
            <MovieDetailsModal movie={movie} isOpen={isModalOpen} onClose={handleCloseModal}/>
        </div>
    );
};

export default MovieCard;