import React, {lazy, Suspense, useEffect} from 'react'
import Header from "../Header.jsx";
import MainContainer from "./MainContainer.jsx";
import {useSelector} from "react-redux";
import GolLoader from "./GolLoader";

const GPTSearch = lazy(() => import("../gptSearch/GPTSearch.jsx"));
const SecondaryContainer = lazy(() => import("./SecondaryContainer"));  
const Browse = () => {
    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
    return (
        <div className='h-fit overflow-x-hidden w-screen transition-all duration-200'>
            <div className="w-screen absolute">
                <Header/>
                {
                    showGPTSearch ? <Suspense fallback={<GolLoader/>}>
                        <GPTSearch/>
                    </Suspense> : <div className="pt-[30%] md:pt-0 bg-black -mt-20">
                        <MainContainer/>
                        <Suspense fallback={<GolLoader/>}>
                            <SecondaryContainer/>
                        </Suspense>
                    </div>
                }
            </div>

        </div>
    );
};

export default Browse
