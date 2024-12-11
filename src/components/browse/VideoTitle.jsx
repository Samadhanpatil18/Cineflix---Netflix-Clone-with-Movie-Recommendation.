import React from "react";

const VideoTitle = ({title, overview}) => {
    return (
        <div className="absolute z-[1] w-full aspect-video flex flex-col justify-center pt-20 pl-10 bg-gradient-to-r from-black">
            <h1 className='font-bold text-2xl md:text-5xl mb-2'>
                {title}
            </h1>
            <p className='text-sm hidden md:inline-block md:text-base mb-4 w-1/3'>{overview}</p>
            <div className='flex gap-5 text-md md:text-2xl'>
                <button className='bg-white hover:opacity-50 text-black  font-bold px-4 md:px-8 py-2 flex gap-2'>
                    <span>▶</span>
                    <span>Play</span>
                </button>
                <button
                    className='bg-opacity-50 bg-black hover:opacity-50 text-white  font-semibold px-4 md:px-8 py-2 flex gap-2'>
                    <span className='bg-black rounded-full px-2 md:px-3 border border-white'>ℹ️</span>
                    <span>More Info</span>
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;